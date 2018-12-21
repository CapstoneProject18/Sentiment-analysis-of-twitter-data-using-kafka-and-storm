package bolts;

import backtype.storm.task.TopologyContext;
import backtype.storm.topology.BasicOutputCollector;
import backtype.storm.topology.OutputFieldsDeclarer;
import backtype.storm.topology.base.BaseBasicBolt;
import backtype.storm.tuple.Tuple;
import com.datastax.driver.core.Cluster;
import com.datastax.driver.core.Session;
import com.datastax.driver.core.Statement;
import com.datastax.driver.core.querybuilder.QueryBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.*;
import java.io.*;
public class SentimentAnalysisToCassandraBolt extends BaseBasicBolt {
    private static final Logger LOG = LoggerFactory.getLogger(SentimentAnalysisToCassandraBolt.class);

  

    @Override
    public void execute(Tuple tuple, BasicOutputCollector collector) {

        System.out.println("tweet"+ tuple.getStringByField("tweet_text"));
        try {
			//RandomAccessFile f = new RandomAccessFile(new File("/home/robin/myfile.txt"), "rw");
			//f.seek(0); // to the beginning
			String s = "{\"tweet_id\":\""+tuple.getLongByField("tweet_id")+"\", \"tweet_text\":\""+tuple.getStringByField("tweet_text")+"\", \"tweet_sentiment\":\""+tuple.getDoubleByField("tweet_sentiment")+"\",\"tweet_created_at\":\""+tuple.getStringByField("tweet_created_at")+"\"},";
			/*f.write(s.getBytes());
			f.close();*/
        	FileReader fr = new FileReader("/home/robin/myfile.txt");
            BufferedReader br = new BufferedReader(fr);
       
            // 1) Read from file in String
            String str = br.readLine();
       
            // 2) Insert content at specified position in String, as per your
            // requirement
            String updatedStr = str.substring(0, 1) + s + str.substring(1);
       
            br.close();
       
            // 3) write updated String in file
            FileWriter writer = new FileWriter("/home/robin/myfile.txt");
            writer.write(updatedStr);
            writer.close();        		
            } catch (IOException e) {
            	
            	e.printStackTrace();        		
            }
        //session.execute(statement);
    }

    @Override
    public void declareOutputFields(OutputFieldsDeclarer declarer) {
    }
}
