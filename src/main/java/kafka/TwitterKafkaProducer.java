package kafka;
import java.util.*;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;
import kafka.producer.KeyedMessage;
import kafka.producer.ProducerConfig;
import com.google.common.collect.Lists;
import com.twitter.hbc.ClientBuilder;
import com.twitter.hbc.core.Client;
import com.twitter.hbc.core.Constants;
import com.twitter.hbc.core.endpoint.StatusesFilterEndpoint;
import com.twitter.hbc.core.processor.StringDelimitedProcessor;
import com.twitter.hbc.httpclient.auth.Authentication;
import com.twitter.hbc.httpclient.auth.OAuth1;
public class TwitterKafkaProducer {
    private static final String topic = "test";
    public static void run() throws InterruptedException {
        Properties properties = new Properties();
        properties.put("metadata.broker.list", "localhost:9092");
        properties.put("serializer.class", "kafka.serializer.StringEncoder");
        properties.put("client.id","camus");
        ProducerConfig producerConfig = new ProducerConfig(properties);
        kafka.javaapi.producer.Producer<String, String> producer = new kafka.javaapi.producer.Producer<String, String>(
                producerConfig);
        BlockingQueue<String> queue = new LinkedBlockingQueue<String>(100);
        StatusesFilterEndpoint endpoint = new StatusesFilterEndpoint();
        endpoint.trackTerms(Lists.newArrayList("twitterapi",
                "#AAPSweep"));
        String consumerKey=    TwitterSourceConstant.CONSUMER_KEY_KEY;
        String consumerSecret=TwitterSourceConstant.CONSUMER_SECRET_KEY;
        String accessToken=TwitterSourceConstant.ACCESS_TOKEN_KEY;
        String accessTokenSecret=TwitterSourceConstant.ACCESS_TOKEN_SECRET_KEY;
        Authentication auth = new OAuth1(consumerKey, consumerSecret, accessToken,
                accessTokenSecret);
        System.out.println("about to connect");
        Client client = new ClientBuilder().hosts(Constants.STREAM_HOST)
                .endpoint(endpoint).authentication(auth)
                .processor(new StringDelimitedProcessor(queue)).build();
        client.connect();
        System.out.println("connected");
        for (int msgRead = 0; msgRead < 1000; msgRead++) {
            KeyedMessage<String, String> message = null;
            try {
            	 System.out.println("line try 0");
                message = new KeyedMessage<String, String>(topic, queue.take());
                System.out.println("line try");
            } catch (InterruptedException e) {
                e.printStackTrace();
                System.out.println("Stream ended");
            }
            System.out.println(message);
            producer.send(message);
        }
        producer.close();
        client.stop();
    }
    public static void main(String[] args) {
        try {
            TwitterKafkaProducer.run();
        } catch (InterruptedException e) {
            System.out.println(e);
        }
    }
}