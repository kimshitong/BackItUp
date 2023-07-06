package com.BackItUp.orbital.controller;

import com.BackItUp.orbital.model.User;
import com.BackItUp.orbital.model.UserEdit;
import com.BackItUp.orbital.repository.userRepo;

import com.BackItUp.orbital.model.Wallet;
import com.BackItUp.orbital.repository.walletRepo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000/")
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

    @PostMapping("/api/createCompany/{creatorId}")
    User newCompany(@RequestBody User user,@PathVariable("creatorId") Integer creatorId) {

        Wallet newWallet = new Wallet(0,0);
        WALLETRepository.save(newWallet);

        user.setCreator(userRepository.findById(creatorId).get());
        user.setWallet(newWallet);

        System.out.println(user);

        return userRepository.save(user);
    }

    @PostMapping("/api/editUser/{id}")
    User newCompany(@RequestBody UserEdit resp, @PathVariable("id") Integer creatorId) {

        User user = userRepository.findById(creatorId).get();

        user.editUser(resp);

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



    @GetMapping("/api/verifyUser/{email}/{password}")
    public Integer verifyUser(@PathVariable("email") String userEmail,@PathVariable("password") String userPass) {
        // Retrieve the user record from the database
        Optional<User> optionalUser = userRepository.findByUserEmailAndUserPass(userEmail,userPass);


        if (optionalUser.isEmpty()) {
            return null;
        }
        User user = optionalUser.get();
        System.out.println("user received" + user.getUserID().toString());
        return user.getUserID();
    }
    @GetMapping("/api/verifyCompany/{email}/{password}")
    public Integer verifyCompany(@PathVariable("email") String userEmail,@PathVariable("password") String userPass) {
        // Retrieve the user record from the database
        Optional<User> optionalUser = userRepository.findByUserEmailAndUserPass(userEmail,userPass);


        if (optionalUser.isEmpty()) {
            return null;
        }
        User user = optionalUser.get();


        if(user.getUserType().equals("Company") && user.getUserVerified()){
            return user.getUserID();
        }else{
            return null;
        }
    }
    @GetMapping("/api/verifyFounder/{email}/{password}")
    public Integer verifyFounder(@PathVariable("email") String userEmail,@PathVariable("password") String userPass) {
        // Retrieve the user record from the database
        Optional<User> optionalUser = userRepository.findByUserEmailAndUserPass(userEmail,userPass);


        if (optionalUser.isEmpty()) {
            return null;
        }
        User user = optionalUser.get();


        if(user.getUserType().equals("Founder") && user.getUserVerified()){
            return user.getUserID();
        }else{
            return null;
        }
    }

    @GetMapping("/api/user/{userID}")
    public User getUser(@PathVariable("userID") Integer userID) {
        // Retrieve the user record from the database
        Optional<User> optionalUser = userRepository.findById(userID);


        if (optionalUser.isEmpty()) {
            return null;
        }
        User user = optionalUser.get();

        return user;
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
