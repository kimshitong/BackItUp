package com.BackItUp.orbital.controller;

import com.BackItUp.orbital.model.User;
import com.BackItUp.orbital.model.Wallet;
import com.BackItUp.orbital.repository.walletRepo;
import com.BackItUp.orbital.repository.userRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class walletController {
    @Autowired
    private walletRepo WALLETRepository;
    @Autowired
    private userRepo userRepository;

    @GetMapping("/api/wallet")
    public Wallet createWallet() {
        Wallet newWallet = new Wallet();
        newWallet.setActiveBalance(0);
        newWallet.setFrozenBalance(0);
        System.out.println("test");
        return WALLETRepository.save(newWallet);
    }

    @GetMapping("/api/user/{userID}/wallet")
    public Wallet getUser(@PathVariable("userID") Integer userID) {
        // Retrieve the user record from the database
        Optional<User> optionalUser = userRepository.findById(userID);

        if (optionalUser.isEmpty()) {
            return null;
        }

        User user = optionalUser.get();

        return user.getWallet();
    }


}
