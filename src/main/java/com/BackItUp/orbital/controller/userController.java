package com.BackItUp.orbital.controller;

import com.BackItUp.orbital.model.User;
import com.BackItUp.orbital.repository.userRepo;

import com.BackItUp.orbital.model.CreateUserRequest;

import com.BackItUp.orbital.model.Wallet;
import com.BackItUp.orbital.repository.walletRepo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class userController {
    @Autowired
    private userRepo userRepository;
    @Autowired
    private walletRepo WALLETRepository;

    @PostMapping("/api/createUser")
    User newUser(@RequestBody CreateUserRequest request) {

        Wallet newWallet = new Wallet(0,0);
        WALLETRepository.save(newWallet);

        User newUser = new User(request, newWallet );

        System.out.println(newUser);


        return userRepository.save(newUser);
    }

    @GetMapping("/api/unverifiedFounder")
    List<User> getUnverifiedFounders() {
        return userRepository.findByUserTypeAndUserVerified("Founder", Boolean.TRUE);
    }

    @GetMapping("/{id}/verify")
    public Boolean verifyUser(@PathVariable("id") Integer userId) {
        // Retrieve the user record from the database
        Optional<User> optionalUser = userRepository.findById(userId);


        if (optionalUser.isEmpty()) {
            return false;
        }

        User user = optionalUser.get();

        // Update the user_verified field
        user.setUserVerified(true);

        // Save the updated user record
        userRepository.save(user);

        return true;
    }
    @GetMapping("/{id}/unverify")
    public Boolean unverifyUser(@PathVariable("id") Integer userId) {
        // Retrieve the user record from the database
        Optional<User> optionalUser = userRepository.findById(userId);


        if (optionalUser.isEmpty()) {
            return false;
        }

        User user = optionalUser.get();

        // Update the user_verified field
        user.setUserVerified(false);

        // Save the updated user record
        userRepository.save(user);

        return true;
    }

    @GetMapping("/users")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }

}
