package com.example.backend.user;

public record UserLoginRequest(
    String identifier, // 🌟 Can be either username or email address
    String password
) {
    public UserLoginRequest {
        if (identifier == null || identifier.trim().isBlank()) {
            throw new IllegalArgumentException("Username or Email address is required.");
        }
        if (password == null || password.isBlank()) {
            throw new IllegalArgumentException("Password is required.");
        }
    }
}

