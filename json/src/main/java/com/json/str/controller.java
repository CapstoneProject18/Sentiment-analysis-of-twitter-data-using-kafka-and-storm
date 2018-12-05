package com.json.str;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class controller {
	
	 BufferedReader br;
	 
	@RequestMapping("/json-api")
	public String GetAllMovies() throws IOException {
		 File file = new File("C:\\Users\\Fayaz\\Desktop\\tweets-only.json"); 
		  
		 
		try {
			br = new BufferedReader(new FileReader(file));
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
		  
		  String str = ""; 
		  String st;
		  while ((st = br.readLine()) != null) 
		     str = str + st;
		   
		
		return str;
	}

}
