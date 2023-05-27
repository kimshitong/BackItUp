package com.BackItUp.orbital.controller;

import com.BackItUp.orbital.model.wallet;
import com.BackItUp.orbital.repository.walletRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
public class walletController {
    @Autowired
    private walletRepo WALLETRepository;

    @GetMapping("/api/wallet")
    public wallet createWallet() {
        wallet newWallet = new wallet();
        newWallet.setActiveBalance(0);
        newWallet.setFrozenBalance(0);
        System.out.println("test");
        return WALLETRepository.save(newWallet);
    }

}
