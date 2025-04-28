package com.zoomo.auth.controllers;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @PostMapping("/login")
    public String login(@RequestBody String credentials) {
        // Handle login logic
        return "Login successful";
    }

    @PostMapping("/register")
    public String register(@RequestBody String userDetails) {
        // Handle registration logic
        return "Registration successful";
    }
}