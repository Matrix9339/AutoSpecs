package com.backend.controller;

import com.backend.entity.Admin;
import com.backend.Services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AdminController {

    private final AdminService adminService;

    @Autowired
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping("/admin-login")
    public ResponseEntity<String> loginAdmin(@RequestBody Admin admin) {
        // Retrieve the admin user from the database based on the provided username
        Admin foundAdmin = adminService.findByUsername(admin.getUsername());

        // Check if admin exists and if the provided password matches
        if (foundAdmin != null && foundAdmin.getPassword().equals(admin.getPassword())) {
            // Authentication successful
            return ResponseEntity.ok("Admin login successful");
        } else {
            // Authentication failed
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }
}
