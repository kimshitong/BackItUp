package com.BackItUp.orbital.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "PAYMENT")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PAYMENT_ID")
    private int paymentId;

    @Column(name = "PAYMENT_AMOUNT", nullable = false)
    private int paymentAmount;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "WALLET_ID_FROM", nullable = false)
    private Wallet walletFrom;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "WALLET_ID_TO", nullable = false)
    private Wallet walletTo;

    @Column(name = "PAYMENT_DT", nullable = false)
    private LocalDateTime paymentDt;

    @Column(name = "DETAILS")
    private String details;

    public int getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(int paymentId) {
        this.paymentId = paymentId;
    }

    public int getPaymentAmount() {
        return paymentAmount;
    }

    public void setPaymentAmount(int paymentAmount) {
        this.paymentAmount = paymentAmount;
    }

    public Wallet getWalletFrom() {
        return walletFrom;
    }

    public void setWalletFrom(Wallet walletFrom) {
        this.walletFrom = walletFrom;
    }

    public Wallet getWalletTo() {
        return walletTo;
    }

    public void setWalletTo(Wallet walletTo) {
        this.walletTo = walletTo;
    }

    public LocalDateTime getPaymentDt() {
        return paymentDt;
    }

    public void setPaymentDt(LocalDateTime paymentDt) {
        this.paymentDt = paymentDt;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }
}