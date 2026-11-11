package com.example.backend.user;

import java.time.LocalDate;

public record UserRegistrationRequest(
    String username,
    String password,
    String firstName,
    String lastName,
    LocalDate dateOfBirth,
    String email
) {
    // Compact constructor to handle initial data validation
    public UserRegistrationRequest {
        if (username == null || username.trim().isBlank()) {
            throw new IllegalArgumentException("Username cannot be empty.");
        }
        if (password == null || password.length() < 8) {
            throw new IllegalArgumentException("Password must be at least 8 characters long.");
        }
        if (dateOfBirth == null || dateOfBirth.isAfter(LocalDate.now())) {
            throw new IllegalArgumentException("Invalid date of birth provided.");
        }
        if (email == null || !email.matches("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")) {
            throw new IllegalArgumentException("Invalid email format.");
        }
        if (firstName == null || firstName.trim().isBlank()) {
            throw new IllegalArgumentException("First name cannot be empty.");
        }
        if (lastName == null || lastName.trim().isBlank()) {
            throw new IllegalArgumentException("Last name cannot be empty.");
        }
    }
}
