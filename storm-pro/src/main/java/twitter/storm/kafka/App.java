package twitter.storm.kafka;

/**
 * Topology class sets topology for this architecture.
 *
 */


import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

import backtype.storm.Config;
import backtype.storm.LocalCluster;
import backtype.storm.topology.TopologyBuilder;

public class App 
{
	static final String topologyName = "twitter-sentiment-analysis-using-storm";
	
    public static void main( String[] args )
    {
    	    	
    	Set<String> languages = new HashSet<String>(Arrays.asList(new String[] {"en"}));
		Set<String> hashtags = new HashSet<String>(Arrays.asList(new String[] {
				"brexit", "barackobama", "hillaryclinton", "donaldtrump"
		}));
		Set<String> mentions = new HashSet<String>(Arrays.asList(new String[] {
				"barackobama", "hillaryclinton", "realdonaldtrump"
		}));
		
		Config config = new Config();
		config.setMessageTimeoutSecs(120);

		TopologyBuilder b = new TopologyBuilder();
		b.setSpout("TwitterSampleSpout", new SampleSpout());
        b.setBolt("MentionSplitBolt", new MentionSplitBolt(languages, hashtags, mentions)).shuffleGrouping("TwitterSampleSpout");
        b.setBolt("TweetWordSplitBolt", new TweetWordSplitBolt(3)).shuffleGrouping("MentionSplitBolt");
        b.setBolt("SentimentAnalysisBolt", new SentimentAnalysisBolt(10, 10 * 60)).shuffleGrouping("TweetWordSplitBolt");

		final LocalCluster cluster = new LocalCluster();
		cluster.submitTopology(topologyName, config, b.createTopology());

		Runtime.getRuntime().addShutdownHook(new Thread() {
			@Override
			public void run() {
				cluster.killTopology(topologyName);
				cluster.shutdown();
			}
		});
    }
}
