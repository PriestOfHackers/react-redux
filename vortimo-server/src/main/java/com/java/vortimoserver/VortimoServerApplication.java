package com.java.vortimoserver;

import org.json.simple.JSONObject;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@SpringBootApplication
@RestController
@EnableAutoConfiguration
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class VortimoServerApplication {
	
	@GetMapping("/")
	@ResponseBody
	public JSONObject getCommits(@RequestParam String interval) {
		return this.buildJson(interval);
	}
	
	
	public JSONObject buildJson(String interval) {
	      JSONObject obj = new JSONObject();
	      JSONObject commits = new JSONObject();
	      
	      
	      if(interval.equals("24hours")) {
	    	  commits.put("trueadm", 3 );
	    	  commits.put("paseka" , 2);
	    	

	    	  obj.put("interval", "24hours");
	    	  obj.put("CommitCounts", commits);
	    	  
	      }else if(interval.equals("week")) {
	    	  commits.put("paseka" , 2);
	    	  commits.put("trueadm", 3 );
	    	  commits.put("acdlite" , 2);
	    	  
	    	  obj.put("interval", "week");
	    	  obj.put("CommitCounts", commits);
	    	  
	      }
	      else if(interval.equals("month")) {
	    	  commits.put("trueadm", 3 );
	    	  commits.put("acdlite" , 2);
	    	  commits.put("paseka" , 3);
	    	  commits.put("bvaughn" , 2);

	    	  obj.put("interval", "month");
	    	  obj.put("CommitCounts", commits);
	      }
	      
	      
	      return obj;
	}

	public static void main(String[] args) {
		SpringApplication.run(VortimoServerApplication.class, args);
	}
}
