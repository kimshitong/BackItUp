package com.BackItUp.orbital.controller;

import com.BackItUp.orbital.model.*;
import com.BackItUp.orbital.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("https://backitup-orb.azurewebsites.net/")
public class investmentController {
    @Autowired
    private walletRepo WALLETRepository;
    @Autowired
    private paymentRepo paymentRepository;
    @Autowired
    private investmentRepo investmentRepository;
    @Autowired
    private postRepo postRepository;
    @Autowired
    private userRepo userRepository;
    @Autowired
    private shareRepo shareRepository;

    @GetMapping("/api/invest/{shareid}/{userid}/{share_amount}/{dt}")
    Integer invest(@PathVariable("shareid") Integer shareID, @PathVariable("share_amount") Integer shareAmount,
                     @PathVariable("userid") Integer userID, @PathVariable("dt")LocalDateTime investDT) {

        User payer = userRepository.findById(userID).get();
        Share share = shareRepository.findById(shareID).get();

        // Invalid Share or User
        if(payer == null){
            return -1;
//            return "Invalid User";
        }
        //Invalid Share
        if(share == null){
            return -2;
//            return "Invalid Share";
        }

        //Verify Share Amount
        Integer minimumShare = share.getShareCountMin();
        if(!share.validSharePurchaseAmount(shareAmount)){
            return -3;
//            return "Insufficient Purchasing Minimum Share Amount : " + minimumShare.toString();
        }

        if(!share.sufficientShare(shareAmount)){
            return -4;
//            return "Insufficient Remaining Share : " + share.getRemainingShare().toString();
        }

        double totalAmount = share.SharePriceCalculator(shareAmount);
        //Retrieve Amount
        Wallet payerWallet = payer.getWallet();

        if(!payerWallet.sufficientBalance(totalAmount)){
            return -5;
//            return "Insufficient Active Balance";
        }

        //Do Payment
        Integer InvestID = invest(share,payer, investDT, shareAmount);

        return InvestID;
    }

    private Integer invest(Share share,User payer, LocalDateTime investDT, Integer shareAmount){
        //Retrieve Company Wallet
        Wallet payerWallet = payer.getWallet();
        Wallet companyWallet = share.getUser().getWallet();

        double totalAmount = share.SharePriceCalculator(shareAmount);

        //Make Payment
        payerWallet.payActiveBalance(totalAmount,companyWallet);
        Payment payment = new Payment(totalAmount,payerWallet,companyWallet,investDT);
        //Register Investment
        Investment investment = new Investment(payer,share,shareAmount,payment,investDT,true);

        //Register In Database
        WALLETRepository.save(companyWallet);
        WALLETRepository.save(payerWallet);
        paymentRepository.save(payment);
        investmentRepository.save(investment);
        return investment.getInvestId();
    }

    @GetMapping("/api/listinvest/user/{userid}")
    List<Investment> userListInvest(@PathVariable("userid") Integer UserID){
        Optional<User> optionalUser = userRepository.findById(UserID);

        if (optionalUser.isEmpty()) {
            return null;
        }

        return investmentRepository.findInvestmentByUser(optionalUser.get());
    }
    @GetMapping("/api/listinvest/post/{postid}")
    List<Investment> postListInvest(@PathVariable("postid") Integer postID){
        Optional<Post> optionalPost = postRepository.findById(postID);

        if (optionalPost.isEmpty()) {
            return null;
        }
        Share share = optionalPost.get().getShare();
        return investmentRepository.findInvestmentByShare(share);
    }

    @GetMapping("/api/listinvest/comp/{compid}")
    List<Investment> compListInvest(@PathVariable("compid") Integer UserID){
        Optional<User> optionalUser = userRepository.findById(UserID);

        if (optionalUser.isEmpty()) {
            return null;
        }

        List<Post> postlist = postRepository.findByUser(optionalUser.get());
        if(postlist == null || postlist.size() == 0){
            return null;
        }
        int postListSize = postlist.size();
        List<Investment> result = new ArrayList<>();

        for(int i = 0; i < postListSize; i++){
            Share share = postlist.get(i).getShare();
            List<Investment> investment = investmentRepository.findInvestmentByShare(share);

            if( investment == null || investment.size() == 0) {
                for (int j = 0; j < postListSize; j++) {
                    result.add(investment.get(j));
                }
            }
        }

        return result;
    }


}
