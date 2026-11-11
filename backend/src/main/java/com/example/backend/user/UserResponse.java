package com.example.backend.user;

import com.example.backend.user.User;
import com.example.backend.user.UserRole;
import java.time.LocalDate;
import com.example.backend.club.Club;

public record UserResponse(
    Long id,
    String username,
    String email,
    String firstName,
    String lastName,
    LocalDate dateOfBirth,
    UserRole role,
    Long clubId,
    String clubName,
    UserClubDto club // id, name, county, first pitch; null when the user has no club
) {
    // Without a club summary (the club field is null)
    public static UserResponse fromEntity(User user) {
        return fromEntity(user, null);
    }

    // Static mapper method to cleanly translate an Entity into this DTO mapping.
    // The club summary is passed in because county and pitch are not on the User entity.
    public static UserResponse fromEntity(User user, UserClubDto club) {
        return new UserResponse(
            user.getId(),
            user.getUsername(),
            user.getEmail(),
            user.getFirstName(),
            user.getLastName(),
            user.getDateOfBirth(),
            user.getRole(),
            user.getClub() != null ? user.getClub().getId() : null,
            user.getClub() != null ? user.getClub().getName() : null,
            club
        );
    }
}