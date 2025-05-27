package com.backend.Services;

import com.backend.entity.Admin;
import com.backend.repo.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    private final AdminRepository adminRepository;

    @Autowired
    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    // Method to retrieve an admin user by username
    public Admin findByUsername(String username) {
        return adminRepository.findByUsername(username);
    }

    // Method to authenticate an admin user based on username and password
    public Admin login(String username, String password) {
        return adminRepository.findByUsernameAndPassword(username, password);
    }
}