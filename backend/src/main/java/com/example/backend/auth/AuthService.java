package com.example.backend.auth;

// ADAPT: imports for your entity, repository, role enum and DTOs
import com.example.backend.geo.GeoService;
import com.example.backend.user.User;
import com.example.backend.user.UserClubDto;
import com.example.backend.user.UserRepository;
import com.example.backend.user.UserRole;
import com.example.backend.user.UserRegistrationRequest;
import com.example.backend.user.UserLoginRequest;
import com.example.backend.user.UserResponse;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * REFERENCE implementation - every line marked ADAPT depends on your entity's
 * real names.
 * If your service layer already has register/login logic, call that from
 * AuthController instead
 * and just keep these rules:
 * - register: normalise the email, BCrypt the password, ALWAYS set role
 * REGULAR_USER
 * (never read a role or club from the request), throw AccountAlreadyExistsException
 * on duplicates
 * - authenticate: the same BadCredentialsException whether the email or the
 * password was wrong
 */
@Service
public class AuthService {

    private final UserRepository users; // ADAPT: your repository for secure_users
    private final PasswordEncoder encoder;
    private final GeoService geo; // already knows how to load a club with its county and pitches

    public AuthService(UserRepository users, PasswordEncoder encoder, GeoService geo) {
        this.users = users;
        this.encoder = encoder;
        this.geo = geo;
    }

    @Transactional
    public UserResponse register(UserRegistrationRequest request) {
        String email = request.email().trim().toLowerCase();
        String username = request.username().trim();
        if (users.findByEmail(email).isPresent()) {
            throw new AccountAlreadyExistsException("email", "Email already registered");
        }
        if (users.findByUsername(username).isPresent()) {
            throw new AccountAlreadyExistsException("username", "Username already taken");
        }
        User user = new User(username, request.firstName(), request.lastName(), email,
                encoder.encode(request.password()), request.dateOfBirth());
        user.setRole(UserRole.REGULAR_USER);
        return toResponse(users.save(user));
    }

    @Transactional(readOnly = true)
    public UserResponse authenticate(UserLoginRequest request) {
        String identifier = request.identifier().trim();

        // 1. Try to find the user by username OR email address
        User user = users.findByUsername(identifier)
                .or(() -> users.findByEmail(identifier.toLowerCase()))
                .orElseThrow(() -> new BadCredentialsException("Bad credentials"));

        // 2. Safely verify the hashed BCrypt password match context
        if (!encoder.matches(request.password(), user.getPasswordHash())) {
            throw new BadCredentialsException("Bad credentials");
        }

        return toResponse(user);
    }

    @Transactional(readOnly = true)
    public UserResponse currentUser(long id) {
        return users.findById(id)
                .map(this::toResponse)
                .orElseThrow(() -> new BadCredentialsException("Unknown user"));
    }

    private UserResponse toResponse(User user) {
        UserClubDto club = null;
        if (user.getClub() != null) {
            // same data the club search returns: first pitch (lowest id) is used as the club's pitch
            club = geo.clubById(user.getClub().getId())
                    .map(c -> new UserClubDto(
                            c.id(),
                            c.name(),
                            c.county(),
                            c.pitches().isEmpty() ? null : c.pitches().get(0).name()))
                    .orElse(null);
        }
        return UserResponse.fromEntity(user, club);
    }
}