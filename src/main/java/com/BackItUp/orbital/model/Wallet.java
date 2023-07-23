package com.BackItUp.orbital.model;

import jakarta.persistence.*;

@Entity
@Table(name = "WALLET")
public class Wallet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "WALLET_ID")
    private Integer walletId;
    @Column(name = "ACTIVE_BALANCE")
    private double activeBalance;
    @Column(name = "FROZEN_BALANCE")
    private double frozenBalance;


    public Wallet() {
    }

    public Wallet(double activeBalance, double frozenBalance) {
        this.activeBalance = activeBalance;
        this.frozenBalance = frozenBalance;
    }

    public Integer getWallet_ID() {
        return walletId;
    }

    public void setWallet_ID(Integer wallet_ID) {
        this.walletId = wallet_ID;
    }
    public boolean sufficientBalance(double amount) {
        return activeBalance > amount;
    }

    public double getActiveBalance() {
        return activeBalance;
    }

    public void setActiveBalance(double activeBalance) {
        this.activeBalance = activeBalance;
    }
    public void reduceActiveBalance(double amount) {
        this.activeBalance -= amount;
    }
    public void addActiveBalance(double amount) {
        this.activeBalance += amount;
    }
    public void payActiveBalance(double amount,Wallet receiver) {

        addActiveBalance(amount);
        receiver.reduceActiveBalance(amount);

    }

    public Integer getWalletId() {
        return walletId;
    }
    public void reduceFrozenBalance(double amount) {
        this.frozenBalance -= amount;
    }
    public void addFrozenBalance(double amount) {
        this.frozenBalance += amount;
    }

    public double getFrozenBalance() {
        return frozenBalance;
    }

    public void setFrozenBalance(double frozenBalance) {
        this.frozenBalance = frozenBalance;
    }


}
