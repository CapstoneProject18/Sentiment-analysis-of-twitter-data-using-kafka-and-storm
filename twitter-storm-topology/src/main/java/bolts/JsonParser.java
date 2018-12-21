package bolts;

import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class JsonParser{
public static void main(String args[]) throws IOException{
	JSONParser parser = new JSONParser();
	try {
		Reader reader = new FileReader("/home/robin/one-json.json");

		Object jsonObj = parser.parse(reader);
		JSONObject jsonObject = (JSONObject) jsonObj;

		String name = (String) jsonObject.get("created_at");

		System.out.println(name);
	} catch (ParseException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	
}
}
