package com.rajeshravi.greetings;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@CrossOrigin("*")
@RequestMapping("/api")
public class GreetingsController {

	@Value("${name:Guest}")
	private String envName;

	@GetMapping("/greetings")
	public @ResponseBody String greetings() {
		return "Hello ".concat(envName);
	}
}
