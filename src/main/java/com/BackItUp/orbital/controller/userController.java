package com.BackItUp.orbital.controller;

import com.BackItUp.orbital.model.User;
import com.BackItUp.orbital.repository.userRepo;

import com.BackItUp.orbital.model.Wallet;
import com.BackItUp.orbital.repository.walletRepo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class userController {
    @Autowired
    private userRepo userRepository;
    @Autowired
    private walletRepo WALLETRepository;

    @PostMapping("/api/createUser")
    User newUser(@RequestBody User user) {

        Wallet newWallet = new Wallet(0,0);
        WALLETRepository.save(newWallet);

        user.setWallet(newWallet);

        System.out.println(user);

        return userRepository.save(user);
    }

    @PostMapping("/api/createCompany/{email}")
    User newCompany(@RequestBody User user,@PathVariable("email") String userEmail) {

        Wallet newWallet = new Wallet(0,0);
        WALLETRepository.save(newWallet);

        user.setCreator(userRepository.findUserByUserEmail(userEmail));
        user.setWallet(newWallet);

        System.out.println(user);

        return userRepository.save(user);
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

//    @PostMapping("/api/createCompany")
//    User newUser(@RequestBody CreateUserRequest request) {
//
//        Wallet newWallet = new Wallet(0,0);
//        WALLETRepository.save(newWallet);
//
//
//        return userRepository.save();
//    }



    @GetMapping("/api/verifyFounder/{email}/{password}")
    public Boolean verifyUser(@PathVariable("email") String userEmail,@PathVariable("password") String userPass) {
        // Retrieve the user record from the database
        Optional<User> optionalUser = userRepository.findByUserEmailAndUserPass(userEmail,userPass);


        if (optionalUser.isEmpty()) {
            return false;
        }
        User user = optionalUser.get();
        return (Objects.equals(user.getUserType(), "Founder") && user.getUserVerified());
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
