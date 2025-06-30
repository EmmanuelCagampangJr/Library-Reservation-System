package com.g01React.LICReservation.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.g01React.LICReservation.Entity.UserEntity;

/**
 * Spring Data JPA Repository for the UserEntity.
 * Provides standard CRUD operations and custom query methods for UserEntity.
 */
@Repository // Marks this interface as a Spring Data JPA repository
public interface UserRepo extends JpaRepository<UserEntity, Long> {

    /**
     * Finds a UserEntity by their username.
     * Spring Data JPA automatically generates the query based on the method name.
     * @param username The username to search for.
     * @return An Optional containing the found UserEntity, or empty if not found.
     */
    Optional<UserEntity> findByUsername(String username);

    /**
     * Finds a UserEntity by their email.
     * Useful for registration (checking if email already exists) or password reset.
     * @param email The email to search for.
     * @return An Optional containing the found UserEntity, or empty if not found.
     */
    Optional<UserEntity> findByEmail(String email);
}
