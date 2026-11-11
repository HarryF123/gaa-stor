package com.example.backend.auth;

// ADAPT: import your own DTO classes (UserRegistrationRequest, LoginRequest, UserResponse)
import com.example.backend.user.UserRegistrationRequest;
import com.example.backend.user.UserLoginRequest;
import com.example.backend.user.UserResponse;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 * Assumes UserResponse is a record with id(), email() and role() accessors.
 * If yours is a class with getters, change user.id() to user.getId() etc.
 */
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService auth;
    private final JwtService jwt;
    private final AuthCookies cookies;

    public AuthController(AuthService auth, JwtService jwt, AuthCookies cookies) {
        this.auth = auth;
        this.jwt = jwt;
        this.cookies = cookies;
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public UserResponse register(@Valid @RequestBody UserRegistrationRequest request) {
        return auth.register(request);
    }

    @PostMapping("/login")
    public UserResponse login(@Valid @RequestBody UserLoginRequest request, HttpServletResponse response) {
        UserResponse user = auth.authenticate(request);
        // the token goes in the cookie only - JavaScript never sees it
        cookies.write(response, jwt.generate(user.id(), user.email(), String.valueOf(user.role())));
        return user;
    }

    @PostMapping("/logout")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void logout(HttpServletResponse response) {
        cookies.clear(response);
    }

    @GetMapping("/me")
    public UserResponse me(@AuthenticationPrincipal AuthUser principal) {
        return auth.currentUser(principal.id());
    }
}
