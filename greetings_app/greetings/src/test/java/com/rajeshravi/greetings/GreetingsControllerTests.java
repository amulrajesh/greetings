package com.rajeshravi.greetings;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

@WebMvcTest
class GreetingsControllerTests {

	@Autowired
	MockMvc mockMvc;
	
	@Test
	void testGreetings() throws Exception {
		this.mockMvc.perform(MockMvcRequestBuilders.get("/greetings"))
				.andExpect(status().isOk())
				.andExpect(content().string("Hello Stakater"));
	}

}
