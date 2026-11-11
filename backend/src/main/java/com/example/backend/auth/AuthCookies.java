package com.example.backend.auth;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Component;

/** Writes and clears the httpOnly cookie that carries the JWT. */
@Component
public class AuthCookies {

    public static final String NAME = "access_token";

    private final JwtService jwt;
    private final boolean secure;

    public AuthCookies(JwtService jwt, @Value("${app.cookie.secure:false}") boolean secure) {
        this.jwt = jwt;
        this.secure = secure;
    }

    // Inside your cookie helper or configuration service:
    @Value("${app.security.cookie-secure:false}")
    private boolean isCookieSecure;

    public void write(HttpServletResponse response, String token) {
        ResponseCookie cookie = ResponseCookie.from(NAME, token)
                .httpOnly(true) // Stops JavaScript access (Cross-Site Scripting protection)
                .secure(isCookieSecure) // 🌟 Toggle: false on localhost, true on production HTTPS!
                .path("/")
                .maxAge(86400) // Expires in 24 Hours
                .sameSite("Lax") // Protects against Cross-Site Request Forgery (CSRF)
                .build();

        response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());
    }

    public void clear(HttpServletResponse response) {
        ResponseCookie cookie = ResponseCookie.from(NAME, "")
                .httpOnly(true)
                .secure(secure)
                .sameSite("Lax")
                .path("/")
                .maxAge(0)
                .build();
        response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());
    }
}
