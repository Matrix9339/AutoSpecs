package com.backend.Services;

import com.backend.entity.User;
import com.backend.repo.Userrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class Services {

    @Autowired
    private Userrepo userRepository;

    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public String getUserNameByEmail(String email) {
        Optional<User> userOptional = userRepository.findByEmail(email);
        return userOptional.map(User::getUser_fname).orElse(null);
    }
}
