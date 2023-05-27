package com.BackItUp.orbital.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class wallet {

    @Id
    @GeneratedValue
    private Integer WALLET_ID;
    private Integer ACTIVE_BALANCE;
    private Integer FROZEN_BALANCE;


    public wallet() {
    }

    public wallet(Integer activeBalance, Integer frozenBalance) {
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
