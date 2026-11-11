package com.example.backend.auth;

public class AccountAlreadyExistsException extends RuntimeException {
    private final String field;

    public AccountAlreadyExistsException(String field, String message) {
        super(message);
        this.field = field;
    }

    public String getField() {
        return field;
    }
}