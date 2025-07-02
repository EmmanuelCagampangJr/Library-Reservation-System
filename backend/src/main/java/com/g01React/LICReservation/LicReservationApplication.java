package com.g01React.LICReservation;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean; // Import for @Bean annotation
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder; // Import for BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder; // Import for PasswordEncoder interface

@SpringBootApplication
public class LicReservationApplication {

	public static void main(String[] args) {
		SpringApplication.run(LicReservationApplication.class, args);
	}

	/**
	 * Defines a BCryptPasswordEncoder bean for password hashing.
	 * This bean is automatically injected into UserService where needed,
	 * providing a secure way to encode and verify passwords.
	 * @return An instance of BCryptPasswordEncoder.
	 */
	@Bean // Marks this method's return value as a Spring bean, making it available for dependency injection
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
