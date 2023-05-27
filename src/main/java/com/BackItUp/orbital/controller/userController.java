package com.BackItUp.orbital.controller;

import com.BackItUp.orbital.model.user;
import com.BackItUp.orbital.model.CreateUserRequest;
import com.BackItUp.orbital.model.wallet;
import com.BackItUp.orbital.repository.walletRepo;
import com.BackItUp.orbital.repository.userRepo;
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
    user newUser(@RequestBody CreateUserRequest request) {
        wallet newWallet = new wallet(0,0);
        System.out.println("test");
        WALLETRepository.save(newWallet);

        System.out.println(request.toString());

        String username = request.getUSER_NAME();
        String email = request.getUSER_EMAIL();
        System.out.println(email);

        String hp = request.getUSER_HP();
        System.out.println(hp);
        String type = request.getUSER_TYPE();
        String password = request.getUSER_PASS();

        user newUser = new user(username,hp,email,password,type,false,newWallet.getWallet_ID());

        System.out.println(newUser);


        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<user> getAllUsers() {
        return userRepository.findAll();
    }

}
