package com.BackItUp.orbital.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

public class TopupResponse {
    private Integer walletID;
    private double topupAmount;
    private Integer topupPaynow;
    private byte[] topupEvidence;
    private boolean topupVerified;
    private LocalDateTime topupDT;

    public TopupResponse() {
    }

    public TopupResponse(Integer walletID, double topupAmount, Integer topupPaynow, LocalDateTime topupDT, boolean topupVerified) {
        this.walletID = walletID;
        this.topupAmount = topupAmount;
        this.topupPaynow = topupPaynow;
        this.topupVerified = topupVerified;
        this.topupDT = topupDT;
    }

    public Integer getWalletID() {
        return walletID;
    }

    public double getTopupAmount() {
        return topupAmount;
    }

    public Integer getTopupPaynow() {
        return topupPaynow;
    }


    public boolean isTopupVerified() {
        return topupVerified;
    }

    public LocalDateTime getTopupDT() {
        return topupDT;
    }
}
