package com.BackItUp.orbital.model;

import jakarta.persistence.*;

@Entity
@Table(name = "WALLET")
public class Wallet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer WALLET_ID;
    private Integer ACTIVE_BALANCE;
    private Integer FROZEN_BALANCE;


    public Wallet() {
    }

    public Wallet(Integer activeBalance, Integer frozenBalance) {
        this.ACTIVE_BALANCE = activeBalance;
        this.FROZEN_BALANCE = frozenBalance;
    }

    public Integer getWallet_ID() {
        return WALLET_ID;
    }

    public void setWallet_ID(Integer wallet_ID) {
        this.WALLET_ID = wallet_ID;
    }

    public Integer getActiveBalance() {
        return ACTIVE_BALANCE;
    }

    public void setActiveBalance(Integer activeBalance) {
        this.ACTIVE_BALANCE = activeBalance;
    }

    public Integer getFrozenBalance() {
        return FROZEN_BALANCE;
    }

    public void setFrozenBalance(Integer frozenBalance) {
        this.FROZEN_BALANCE = frozenBalance;
    }


}
