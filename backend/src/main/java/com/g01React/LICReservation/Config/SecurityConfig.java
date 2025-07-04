package com.g01React.LICReservation.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

/**
 * Spring Security Configuration for the Library Reservation System.
 * This class configures security rules, allowing public access to
 * registration and login endpoints, and securing other endpoints.
 */
@Configuration // Marks this class as a Spring configuration class
@EnableWebSecurity // Enables Spring Security's web security features
public class SecurityConfig {

    /**
     * Configures the security filter chain for HTTP requests.
     * This method defines which requests require authentication and which are public.
     *
     * @param http The HttpSecurity object to configure.
     * @return The built SecurityFilterChain.
     * @throws Exception if an error occurs during configuration.
     */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(AbstractHttpConfigurer::disable) // Disable CSRF for stateless APIs (common for React/REST)
            .authorizeHttpRequests(authorize -> authorize
                // Permit public access to registration and login endpoints
                .requestMatchers("/api/users/register", "/api/users/login").permitAll()
                // All other requests require authentication
                .anyRequest().authenticated()
            );
        return http.build();
    }

    // Note: The PasswordEncoder bean is already defined in LicReservationApplication.java.
    // If it were not, you would define it here:
    /*
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    */
}
