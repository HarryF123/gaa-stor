package com.example.backend.config;

import com.example.backend.auth.JwtAuthenticationFilter;
import com.example.backend.auth.JwtService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

/**
 * THE ONLY SecurityConfig in the project: replace backend/src/main/java/com/example/backend/config/SecurityConfig.java
 * with this file. Check there is no other one:  grep -rln "SecurityFilterChain" backend/src   (should list one file)
 *
 * @EnableMethodSecurity switches on @PreAuthorize, which is what enforces the per-club rules
 * (see ClubAccess). URL rules below only decide who must be logged in; club ownership is
 * checked on each controller method.
 */
@Configuration
@EnableMethodSecurity
public class SecurityConfig {

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    SecurityFilterChain filterChain(HttpSecurity http, JwtService jwt) throws Exception {
        http
                // CSRF off: SameSite=Lax cookie, JSON-only API, same origin (Vite proxy / nginx)
                .csrf(csrf -> csrf.disable())
                // stateless: no JSESSIONID cookie should ever appear in a response
                .sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                // anonymous requests to protected URLs get 401 (not 403)
                .exceptionHandling(e -> e.authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED)))
                .authorizeHttpRequests(auth -> auth
                        // Without this, any exception inside a controller is turned into a 403 / 401:
                        // the error page (/error) is also checked by Spring Security and blocked.
                        .requestMatchers("/error").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/auth/register", "/api/auth/login", "/api/auth/logout").permitAll()
                        // Club member lists are private. This MUST stay above the public
                        // GET /api/clubs/** rule below (first matching rule wins).
                        .requestMatchers(HttpMethod.GET, "/api/clubs/*/members/**").authenticated()
                        .requestMatchers(HttpMethod.GET, "/api/counties/**", "/api/clubs/**", "/actuator/health").permitAll()
                        .requestMatchers("/api/users/**").hasRole("DEV_ADMIN")
                        // POST/PUT/DELETE under /api/clubs/** land here (must be logged in);
                        // @PreAuthorize on each controller method then checks role + own club.
                        .anyRequest().authenticated())
                .addFilterBefore(new JwtAuthenticationFilter(jwt), UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }
}