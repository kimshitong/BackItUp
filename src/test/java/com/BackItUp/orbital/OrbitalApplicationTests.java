package com.BackItUp.orbital;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat; // Correct import for assertThat


//@SpringBootTest
class OrbitalApplicationTests {

	Calculator underTest = new Calculator();
	@Test
	void contextLoads() {
	}

	@Test
	void itShouldAddNumbers(){
		int numOne = 20;
		int numTwo = 30;

		int result = underTest.add(numOne,numTwo);

		assertThat(result).isEqualTo(50);
	}

	class Calculator{
		int add(int a, int b){
			return (a + b);
		}
	}

}
