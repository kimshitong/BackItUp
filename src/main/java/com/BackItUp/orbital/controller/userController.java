package com.BackItUp.orbital.controller;

import com.BackItUp.orbital.model.User;
import com.BackItUp.orbital.repository.userRepo;

import com.BackItUp.orbital.model.CreateUserRequest;

import com.BackItUp.orbital.model.Wallet;
import com.BackItUp.orbital.repository.walletRepo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

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

    @GetMapping("/users")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }

}
