package com.BackItUp.orbital.controller;

import com.BackItUp.orbital.model.*;
import com.BackItUp.orbital.repository.notificationRepo;
import com.BackItUp.orbital.repository.userRepo;
import com.BackItUp.orbital.repository.withdrawalRepo;
import com.BackItUp.orbital.repository.walletRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("https://backitup.mysql.database.azure.com/")
public class withdrawalController {
    @Autowired
    private walletRepo WALLETRepository;
    @Autowired
    private withdrawalRepo withdrawalRepository;
    @Autowired
    private userRepo userRepository;
    @Autowired
    private notificationRepo notificationRepository;
    @PostMapping("/api/withdrawal")
    Withdrawal newWithdrawal(@RequestBody WithdrawalResponse response) {

        Wallet wallet = WALLETRepository.findById(response.getWalletID()).get();

        Withdrawal withdrawal = new Withdrawal(wallet, response.getWithdrawalAmount(),response.getWithdrawalPaynow(),response.getWithdrawalDT(), response.isWithdrawalVerified());

        return withdrawalRepository.save(withdrawal);
    }
    @GetMapping("/api/withdrawal/{verification}/{id}/{dt}")
    boolean verifyWithdrawal(@PathVariable("id") Integer withID, @PathVariable("dt") LocalDateTime dt, @PathVariable("verification") String verification) {
        Withdrawal withdrawal = withdrawalRepository.findById(withID).get();

        if(withdrawal == null) {
            return false;
        }

        if(verification.equals("verify")){
            withdrawal.verify(dt);
            User user = userRepository.findByWallet(withdrawal.getWallet());
            notificationRepository.save(Notification.sendWithdrawalSuccessNotification(user,withdrawal));

        }else if(verification.equals("unverify")){
            withdrawal.unverify(dt);
        }else{
            return false;
        }


        withdrawalRepository.save(withdrawal);
        return true;
    }

    @GetMapping("/api/listWithdrawal/{wallet_id}")
    List<Withdrawal> check(@PathVariable("wallet_id") Integer walletID){
        Wallet wallet = WALLETRepository.findById(walletID).get();

        return withdrawalRepository.findByWallet(wallet);
    }
    @GetMapping("/api/listWithdrawal")
    List<Withdrawal> getAllWithdrawal() {
        return withdrawalRepository.findAll();
    }


}
