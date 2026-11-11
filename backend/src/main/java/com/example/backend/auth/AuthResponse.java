package com.example.backend.auth;
import com.example.backend.user.UserResponse;

public record AuthResponse(
    String accessToken,
    UserResponse user
) {}
