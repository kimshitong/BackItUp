package com.BackItUp.orbital.controller;

import com.BackItUp.orbital.model.*;
import com.BackItUp.orbital.repository.topupRepo;
import com.BackItUp.orbital.repository.walletRepo;
import com.BackItUp.orbital.repository.withdrawalRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class topupController {
    @Autowired
    private walletRepo WALLETRepository;
    @Autowired
    private topupRepo topupRepository;
    @PostMapping("/api/topup")
    Topup newTopup(@RequestBody TopupResponse response) {

        Wallet wallet = WALLETRepository.findById(response.getWalletID()).get();

        Topup topup = new Topup(wallet, response.getTopupAmount(), response.getTopupPaynow() ,response.isTopupVerified(),response.getTopupDT());

        return topupRepository.save(topup);
    }

    @GetMapping("/api/topup/{verification}/{id}/{dt}")
    boolean verifyWithdrawal(@PathVariable("id") Integer topID, @PathVariable("dt") LocalDateTime dt, @PathVariable("verification") String verification) {
        Topup topup = topupRepository.findById(topID).get();

        if(topup == null){
            System.out.println(topup.toString());
            return false;
        }

        if(verification.equals("verify")){
            topup.verify(dt);
        }else if(verification.equals("unverify")){
            topup.unverify(dt);
        }else{

            return false;
        }


        topupRepository.save(topup);
        return true;
    }

    @GetMapping("/api/listTopUp/{wallet_id}")
    List<Topup> check(@PathVariable("wallet_id") Integer walletID){
        Wallet wallet = WALLETRepository.findById(walletID).get();

        return topupRepository.findByWallet(wallet);
    }

    @GetMapping("/api/listTopup")
    List<Topup> getAllTopUp() {
        return topupRepository.findAll();
    }

}
