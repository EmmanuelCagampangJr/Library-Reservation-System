package com.g01React.LICReservation.Service;

import com.g01React.LICReservation.Entity.UserEntity;
import com.g01React.LICReservation.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired(required = false) // Only inject if available (for flexibility)
    private PasswordEncoder passwordEncoder;

    // Register a new user (returns null if username/email already exists)
    public UserEntity registerUser(UserEntity user) {
        if (userRepo.findByUsername(user.getUsername()).isPresent() ||
            userRepo.findByEmail(user.getEmail()).isPresent()) {
            return null; // Username or email already exists
        }
        // Hash the password if encoder is available
        if (passwordEncoder != null) {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
        }
        return userRepo.save(user);
    }

    // Validate user login (returns Optional<UserEntity> if valid)
    public Optional<UserEntity> validateUser(String username, String password) {
        Optional<UserEntity> userOpt = userRepo.findByUsername(username);
        if (userOpt.isPresent()) {
            UserEntity user = userOpt.get();
            // Check password (hash if encoder is available)
            if (passwordEncoder != null) {
                if (passwordEncoder.matches(password, user.getPassword())) {
                    return Optional.of(user);
                }
            } else {
                // Plain text fallback (not recommended for production)
                if (user.getPassword().equals(password)) {
                    return Optional.of(user);
                }
            }
        }
        return Optional.empty();
    }

    // Get user by ID (for booking linkage)
    public UserEntity getUserById(Long id) {
        return userRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));
    }
}