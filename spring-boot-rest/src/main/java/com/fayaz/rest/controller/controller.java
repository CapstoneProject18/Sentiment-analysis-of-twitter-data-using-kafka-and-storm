package com.fayaz.rest.controller;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
public class controller {
	
	 BufferedReader br;
	 
	@RequestMapping("/json-api")
	public String GetAllMovies() throws IOException {
		 File file = new File("/home/robin/myfile.txt"); 
		  
		 
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