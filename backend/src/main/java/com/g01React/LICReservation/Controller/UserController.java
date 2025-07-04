package com.g01React.LICReservation.Controller;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.g01React.LICReservation.Entity.UserEntity;
import com.g01React.LICReservation.Service.UserService;

/**
 * REST Controller for handling user-related API requests.
 * Provides endpoints for user registration and login.
 */
@RestController // Marks this class as a RESTful Controller
@RequestMapping("/api/users") // Base path for all endpoints in this controller
@CrossOrigin(origins = "http://localhost:3000") // Adjust this if your frontend runs on a different port
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    /**
     * DTO for user registration requests.
     * Represents the data sent from the frontend for creating a new user.
     */
    static class RegisterRequest {
        private String username;
        private String email;
        private String password;

        // Getters and Setters
        public String getUsername() { return username; }
        public void setUsername(String username) { this.username = username; }
        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
        public String getPassword() { return password; }
        public void setPassword(String password) { this.password = password; }
    }

    /**
     * DTO for user login requests.
     * Represents the data sent from the frontend for user authentication.
     */
    static class LoginRequest {
        private String username;
        private String password;

        // Getters and Setters
        public String getUsername() { return username; }
        public void setUsername(String username) { this.username = username; }
        public String getPassword() { return password; }
        public void setPassword(String password) { this.password = password; }
    }

    /**
     * Handles user registration requests.
     * Expects JSON body with username, email, and password.
     * @param request The RegisterRequest DTO containing user details.
     * @return ResponseEntity with the created user or an error message.
     */
    @PostMapping("/register") // Maps POST requests to /api/users/register
    public ResponseEntity<String> registerUser(@RequestBody RegisterRequest request) {
        // Create a UserEntity from the request DTO
        UserEntity newUser = new UserEntity(request.getUsername(), request.getEmail(), request.getPassword());
        UserEntity registeredUser = userService.registerUser(newUser);

        if (registeredUser == null) {
            // If registerUser returns null, it means username or email already exists
            // In a real application, you'd send more specific error messages (e.g., "Username taken")
            return new ResponseEntity<>("Registration failed: Username or Email already exists.", HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>("User registered successfully!", HttpStatus.CREATED);
    }

    /**
     * Handles user login requests.
     * Expects JSON body with username and password.
     * @param request The LoginRequest DTO containing username and password.
     * @return ResponseEntity with success message or unauthorized status.
     */
    @PostMapping("/login") // Maps POST requests to /api/users/login
    public ResponseEntity<String> loginUser(@RequestBody LoginRequest request) {
        Optional<UserEntity> userOptional = userService.validateUser(request.getUsername(), request.getPassword());

        if (userOptional.isPresent()) {
            // In a full application, you would generate and return a JWT token here
            // For now, a simple success message
            return new ResponseEntity<>("Login successful!", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Invalid username or password.", HttpStatus.UNAUTHORIZED);
        }
    }
}
