package com.BackItUp.orbital;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class OrbitalApplication {

	public static void main(String[] args) {
		SpringApplication.run(OrbitalApplication.class, args);
	}

	// Fix CORS errors
	@Configuration
	public class CorsConfig implements WebMvcConfigurer {

		@Override
		public void addCorsMappings(CorsRegistry registry) {
			registry.addMapping("/api/**")
					.allowedOriginPatterns("*") // Replace with the actual frontend URL
					.allowedMethods("GET", "POST", "PUT", "DELETE")
					.allowedHeaders("*")
					.allowCredentials(true);
		}
	}
}