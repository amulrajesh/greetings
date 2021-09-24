package com.rajeshravi.greetings;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingsController {
	
	@Value("${name:Guest}")
	private String envName;

	@GetMapping("/greetings")
	public String greetings() {
		return "Hello ".concat(envName);
	}
}
