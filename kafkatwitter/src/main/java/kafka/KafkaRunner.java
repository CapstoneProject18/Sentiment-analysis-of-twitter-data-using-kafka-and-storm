package kafka;

public class KafkaRunner {
	public static void main(String args[]) {
	Thread politics = new Thread(new Runnable(){
	    public void run() {
	    	try {
				TwitterKafkaProducer.run();
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	    }
	});
	Thread sports = new Thread(new Runnable(){
	    public void run() {
	    	try {
				KafkaProducer2.run();
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	    }
	});
	
	politics.start();
	sports.start();
	}
}
