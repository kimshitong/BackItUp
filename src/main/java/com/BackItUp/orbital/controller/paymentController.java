package com.BackItUp.orbital.controller;

import com.BackItUp.orbital.model.Wallet;
import com.BackItUp.orbital.model.Withdrawal;
import com.BackItUp.orbital.model.WithdrawalResponse;
import com.BackItUp.orbital.repository.paymentRepo;
import com.BackItUp.orbital.repository.walletRepo;
import com.BackItUp.orbital.repository.withdrawalRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@CrossOrigin("http://localhost:3000")
public class paymentController {
    @Autowired
    private walletRepo WALLETRepository;
    @Autowired
    private paymentRepo paymentRepository;
    @PostMapping("/api/checkPayment/{wallet_from}/{payment_amount}")
    boolean check(@PathVariable("wallet_from") Integer walletID, @PathVariable("payment_amount") Integer paymentAmount){
        Wallet wallet = WALLETRepository.findById(walletID).get();

        if(paymentAmount <= wallet.getActiveBalance()){
            return true;
        }else{
            return false;
        }
    }




}
