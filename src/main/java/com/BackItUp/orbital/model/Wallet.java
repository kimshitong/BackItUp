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
    private Integer activeBalance;
    @Column(name = "FROZEN_BALANCE")
    private Integer frozenBalance;


    public Wallet() {
    }

    public Wallet(Integer activeBalance, Integer frozenBalance) {
        this.activeBalance = activeBalance;
        this.frozenBalance = frozenBalance;
    }

    public Integer getWallet_ID() {
        return walletId;
    }

    public void setWallet_ID(Integer wallet_ID) {
        this.walletId = wallet_ID;
    }

    public Integer getActiveBalance() {
        return activeBalance;
    }

    public void setActiveBalance(Integer activeBalance) {
        this.activeBalance = activeBalance;
    }

    public Integer getFrozenBalance() {
        return frozenBalance;
    }

    public void setFrozenBalance(Integer frozenBalance) {
        this.frozenBalance = frozenBalance;
    }


}
