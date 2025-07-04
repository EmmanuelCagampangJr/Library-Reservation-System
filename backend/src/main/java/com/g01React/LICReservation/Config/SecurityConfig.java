package com.g01React.LICReservation.Config;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain; // Import for CorsConfiguration
import org.springframework.web.cors.CorsConfiguration; // Import for UrlBasedCorsConfigurationSource
import org.springframework.web.cors.UrlBasedCorsConfigurationSource; // Import for CorsFilter
import org.springframework.web.filter.CorsFilter; // Import for Arrays.asList

/**
 * Spring Security Configuration for the Library Reservation System.
 * This class configures security rules, allowing public access to
 * registration, login, and reservation endpoints, and securing other endpoints.
 * It also configures CORS to allow requests from the frontend.
 */
@Configuration
@EnableWebSecurity
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
            .csrf(AbstractHttpConfigurer::disable) // Disable CSRF for stateless APIs
            .authorizeHttpRequests(authorize -> authorize
                // Permit public access to registration, login, and all reservation endpoints
                .requestMatchers("/api/users/register", "/api/users/login", "/api/reservations/**").permitAll()
                // All other requests require authentication
                .anyRequest().authenticated()
            );
        return http.build();
    }

    /**
     * Configures the CORS filter to allow cross-origin requests from the frontend.
     * This bean is crucial for allowing your React app (on localhost:3000)
     * to communicate with your Spring Boot backend (on localhost:8080).
     *
     * @return A CorsFilter configured with allowed origins, methods, and headers.
     */
    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true); // Allow sending cookies/auth headers
        // Allow requests from your React frontend origin
        config.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
        // Allow common HTTP methods
        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        // Allow all headers
        config.setAllowedHeaders(Arrays.asList("*"));
        source.registerCorsConfiguration("/**", config); // Apply this CORS config to all paths
        return new CorsFilter(source);
    }
}
