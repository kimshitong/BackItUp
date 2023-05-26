package com.BackItUp.orbital.controller;

import com.BackItUp.orbital.model.user;
import com.BackItUp.orbital.repository.userRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
//@CrossOrigin("http://localhost:3000")
public class userController {
    @Autowired
    private userRepo userRepository;

    @PostMapping("/user")
    user newUser(@RequestBody user newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<user> getAllUsers() {
        return userRepository.findAll();
    }

}
