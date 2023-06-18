package com.BackItUp.orbital.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

public class WithdrawalResponse {

    private Integer walletID;

    private double withdrawalAmount;
    private Integer withdrawalPaynow;
    private LocalDateTime withdrawalDT;

    private boolean withdrawalVerified;

    public WithdrawalResponse() {
    }

    public WithdrawalResponse(Integer walletID , double withdrawalAmount, Integer withdrawalPaynow, LocalDateTime withdrawalDT, boolean withdrawalVerified) {
        this.walletID = walletID;
        this.withdrawalAmount = withdrawalAmount;
        this.withdrawalPaynow = withdrawalPaynow;
        this.withdrawalDT = withdrawalDT;
        this.withdrawalVerified = withdrawalVerified;
    }

    public Integer getWalletID() {
        return walletID;
    }

    public void setWalletID(Integer walletID) {
        this.walletID = walletID;
    }

    public double getWithdrawalAmount() {
        return withdrawalAmount;
    }

    public void setWithdrawalAmount(Integer withdrawalAmount) {
        this.withdrawalAmount = withdrawalAmount;
    }

    public Integer getWithdrawalPaynow() {
        return withdrawalPaynow;
    }

    public void setWithdrawalPaynow(Integer withdrawalPaynow) {
        this.withdrawalPaynow = withdrawalPaynow;
    }

    public LocalDateTime getWithdrawalDT() {
        return withdrawalDT;
    }

    public void setWithdrawalDT(LocalDateTime withdrawalDT) {
        this.withdrawalDT = withdrawalDT;
    }

    public boolean isWithdrawalVerified() {
        return withdrawalVerified;
    }

    public void setWithdrawalVerified(boolean withdrawalVerified) {
        this.withdrawalVerified = withdrawalVerified;
    }
}
