package com.g01React.LICReservation.Service;

import com.g01React.LICReservation.Entity.UserEntity;
import com.g01React.LICReservation.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder; // Important for password hashing
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * Service class for handling User-related business logic.
 * This includes user registration, finding users, and potentially password management.
 */
@Service // Marks this class as a Spring Service component
public class UserService {

    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder; // Injects the password encoder for hashing

    /**
     * Constructor for dependency injection.
     * @param userRepo The UserRepository to interact with the database.
     * @param passwordEncoder The PasswordEncoder for secure password hashing.
     */
    @Autowired
    public UserService(UserRepo userRepo, PasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }

    /**
     * Registers a new user.
     * Hashes the password before saving the user to the database.
     * Checks if a user with the given username or email already exists.
     * @param userEntity The UserEntity object containing user details (with raw password).
     * @return The saved UserEntity with the hashed password, or null if username/email already exists.
     */
    public UserEntity registerUser(UserEntity userEntity) {
        // Check if username already exists
        if (userRepo.findByUsername(userEntity.getUsername()).isPresent()) {
            // You might want to throw a custom exception here for better error handling
            System.out.println("Username already exists: " + userEntity.getUsername());
            return null; // Or throw UsernameAlreadyExistsException
        }

        // Check if email already exists
        if (userRepo.findByEmail(userEntity.getEmail()).isPresent()) {
            System.out.println("Email already exists: " + userEntity.getEmail());
            return null; // Or throw EmailAlreadyExistsException
        }

        // Hash the plain text password before saving
        String encodedPassword = passwordEncoder.encode(userEntity.getPassword());
        userEntity.setPassword(encodedPassword);

        // Save the new user to the database
        return userRepo.save(userEntity);
    }

    /**
     * Finds a user by their username.
     * @param username The username to search for.
     * @return An Optional containing the UserEntity if found.
     */
    public Optional<UserEntity> findByUsername(String username) {
        return userRepo.findByUsername(username);
    }

    /**
     * Validates user credentials for login.
     * @param username The username provided by the user.
     * @param rawPassword The raw (unhashed) password provided by the user.
     * @return An Optional containing the UserEntity if credentials are valid, otherwise empty.
     */
    public Optional<UserEntity> validateUser(String username, String rawPassword) {
        Optional<UserEntity> userOptional = userRepo.findByUsername(username);

        if (userOptional.isPresent()) {
            UserEntity user = userOptional.get();
            // Compare the raw password with the stored hashed password
            if (passwordEncoder.matches(rawPassword, user.getPassword())) {
                return Optional.of(user); // Credentials match
            }
        }
        return Optional.empty(); // User not found or password does not match
    }

    // You might add more methods here, e.g., for updating user profile, password reset etc.
}
