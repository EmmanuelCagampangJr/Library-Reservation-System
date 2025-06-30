package com.g01React.LICReservation.Entity;

import jakarta.persistence.Column; // Using jakarta.persistence for Spring Boot 3+
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * Represents a User entity, mapping to the 'user' table in the database.
 * This entity includes fields for user authentication and password reset.
 */
@Entity
@Table(name = "user") // Maps this entity to the 'user' table in the database
public class UserEntity {

    @Id // Denotes the primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Configures for auto-incremented ID
    @Column(name = "id") // Maps to the 'id' column in the database, which is bigint
    private Long id;

    @Column(name = "username", nullable = false, length = 255) // Maps to 'username' varchar(255), not nullable
    private String username;

    @Column(name = "email", nullable = false, length = 255) // Maps to 'email' varchar(255), not nullable
    private String email;

    @Column(name = "password", nullable = false, length = 255) // Maps to 'password' varchar(255), not nullable
    private String password; // This will store the hashed password

    @Column(name = "password_reset_token", nullable = true, length = 255) // Maps to 'password_reset_token' varchar(255), nullable
    private String passwordResetToken;

    @Column(name = "token_expiry_time", nullable = true) // Maps to 'token_expiry_time' bigint, nullable
    private Long tokenExpiryTime; // Using Long to store timestamp (e.g., milliseconds since epoch)

    // Default constructor is required by JPA
    public UserEntity() {
    }

    /**
     * Constructor for creating a new UserEntity (without ID, token, expiry for initial registration).
     * @param username The user's chosen username.
     * @param email The user's email address.
     * @param password The user's password (should be hashed before saving).
     */
    public UserEntity(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // --- Getters and Setters ---

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPasswordResetToken() {
        return passwordResetToken;
    }

    public void setPasswordResetToken(String passwordResetToken) {
        this.passwordResetToken = passwordResetToken;
    }

    public Long getTokenExpiryTime() {
        return tokenExpiryTime;
    }

    public void setTokenExpiryTime(Long tokenExpiryTime) {
        this.tokenExpiryTime = tokenExpiryTime;
    }
}
