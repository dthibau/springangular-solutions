package org.formation;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
	
	Logger logger = LoggerFactory.getLogger(HelloController.class);

	@Autowired
	HelloProperties props;
	
	@Value("${hasard}")
	private String uuid;
	
	@RequestMapping("/hello")
	public String hello(@RequestParam String name) {
	// En fonction de HelloProperties « Dire bonjour » à name
		
		return props.getGreeting() + " " + name;
	}
	
	@RequestMapping("/hasard")
	public String hasard() {
		logger.debug("Entering hasard !!");
		return uuid;
	}
}
