/**
 * 
 	Storm Spout : Responsible for reading tweets using twitter4j library
 */

package twitter.storm.kafka;

import java.util.Map;
import java.util.concurrent.LinkedBlockingQueue;

/**
 * @author Pujam
 *
 */

import backtype.storm.Config;
import backtype.storm.spout.SpoutOutputCollector;
import backtype.storm.task.TopologyContext;
import backtype.storm.topology.OutputFieldsDeclarer;
import backtype.storm.topology.base.BaseRichSpout;
import backtype.storm.tuple.Fields;
import backtype.storm.tuple.Values;
import backtype.storm.utils.Utils;
import twitter4j.*;


public class SampleSpout extends BaseRichSpout {
	
	private SpoutOutputCollector collector;
	private LinkedBlockingQueue<Status> queue;
	private TwitterStream twitterStream;
	

	@Override
	public void open(Map conf, TopologyContext context, SpoutOutputCollector collector) {
		// TODO Auto-generated method stub
		
		queue = new LinkedBlockingQueue<Status>(1000);
		this.collector = collector;
		
		StatusListener listener = new StatusListener() {
			
			@Override
			public void onStatus(Status status) {
				queue.offer(status);
			}
			
			@Override
			public void onDeletionNotice(StatusDeletionNotice sdn) {
				
			}
			
			@Override
			public void onTrackLimitationNotice(int i) {
				
			}
			
			@Override
			public void onScrubGeo(long l, long l1) {
				
			}
			
			/*@Override
			public void onStallWarning(StallWarning stallwarn) {
				
			}*/
			
			@Override
			public void onException(Exception e) {
			}
			
		};
		
		TwitterStreamFactory factory = new TwitterStreamFactory();
		twitterStream = factory.getInstance();
		twitterStream.addListener(listener);
		twitterStream.sample();
		
		
	}

	@Override
	public void nextTuple() {
		// TODO Auto-generated method stub
		
		Status ret = queue.poll();
		if(ret==null) {
			Utils.sleep(50);
		} else {
			collector.emit(new Values(ret));
		}
	}

	@Override
	public void close() {
		// TODO Auto-generated method stub
		
		twitterStream.shutdown();
	}
	
	@Override
	public Map<String, Object> getComponentConfiguration() {
		Config ret = new Config();
		ret.setMaxTaskParallelism(1);
		return ret;
	}

	@Override
	public void ack(Object id) {
	}

	@Override
	public void fail(Object id) {
	}

	@Override
	public void declareOutputFields(OutputFieldsDeclarer declarer) {
		declarer.declare(new Fields("tweet"));
	}

}
