import backtype.storm.Config;
import backtype.storm.LocalCluster;
import backtype.storm.StormSubmitter;
import backtype.storm.spout.SchemeAsMultiScheme;
import backtype.storm.topology.TopologyBuilder;
import backtype.storm.tuple.Fields;
import bolts.*;
import storm.kafka.*;
import storm.kafka.bolt.KafkaBolt;

import java.util.Properties;

public class TwitterProcessorTopology extends BaseTopology {

    public TwitterProcessorTopology(String configFileLocation) throws Exception {
        super(configFileLocation);
    }

    private void configureKafkaSpout(TopologyBuilder topology) {
        BrokerHosts hosts = new ZkHosts(topologyConfig.getProperty("zookeeper.host"));

        SpoutConfig spoutConfig = new SpoutConfig(
                hosts,
                topologyConfig.getProperty("kafka.twitter.raw.topic"),
                topologyConfig.getProperty("kafka.zkRoot"),
                topologyConfig.getProperty("kafka.consumer.group"));
        spoutConfig.scheme= new SchemeAsMultiScheme(new StringScheme());

        KafkaSpout kafkaSpout= new KafkaSpout(spoutConfig);
        topology.setSpout("twitterSpout", kafkaSpout);
    }

    private void configureBolts(TopologyBuilder topology) {
        // filtering
        topology.setBolt("twitterFilter", new TwitterFilterBolt(), 4)
                .shuffleGrouping("twitterSpout");

        // sanitization
        topology.setBolt("textSanitization", new TextSanitizationBolt(), 4)
                .shuffleGrouping("twitterFilter");

        // sentiment analysis
        topology.setBolt("sentimentAnalysis", new SentimentAnalysisBolt(), 4)
                .shuffleGrouping("textSanitization");

        topology.setBolt("sentimentAnalysisToCassandra", new SentimentAnalysisToCassandraBolt(), 4)
                .shuffleGrouping("sentimentAnalysis");

    }

    private void buildAndSubmit() throws Exception {
        TopologyBuilder builder = new TopologyBuilder();
        configureKafkaSpout(builder);
        configureBolts(builder);

        Config config = new Config();

        //set producer properties
        Properties props = new Properties();
        props.put("metadata.broker.list", topologyConfig.getProperty("kafka.broker.list"));
        props.put("request.required.acks", "1");
        props.put("serializer.class", "kafka.serializer.StringEncoder");
        config.put(KafkaBolt.KAFKA_BROKER_PROPERTIES, props);
        //System.setProperty("storm.jar", "/home/robin/apache-storm-1.2.2/lib/storm-core-1.2.2.jar");
        
        LocalCluster cluster = new LocalCluster();
        
        //StormSubmitter.submitTopology("twitter-processors", config, builder.createTopology());
        cluster.submitTopology("twitter-processors", config, builder.createTopology());
        Thread.sleep(10000);
		
        //Stop the topology
  		
        cluster.shutdown();
    }

    public static void main(String[] args) throws Exception {
        String configFileLocation = args[0];

        TwitterProcessorTopology topology = new TwitterProcessorTopology(configFileLocation);
        topology.buildAndSubmit();
    }
}
