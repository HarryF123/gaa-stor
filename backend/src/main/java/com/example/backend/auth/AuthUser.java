package com.example.backend.auth;

/** The logged-in user as seen by controllers: use @AuthenticationPrincipal AuthUser user. */
public record AuthUser(long id, String email, String role) {
}
