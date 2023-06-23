package com.BackItUp.orbital.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "withdrawal")
public class Withdrawal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "WITHDRAWAL_ID")
    private Integer withdrawalID;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "WALLET_ID", nullable = false)
    private Wallet wallet;

    @Column(name = "WITHDRAWAL_AMOUNT")
    private double withdrawalAmount;
    @Column(name = "WITHDRAWAL_PAYNOW")
    private Integer withdrawalPaynow;
    @Column(name = "WITHDRAWAL_DT")
    private LocalDateTime withdrawalDT;

    @Column(name = "WITHDRAWAL_VERIFIED")
    private Integer withdrawalVerified;
    @Column(name = "WITHDRAWAL_DONE_DT")
    private LocalDateTime withdrawalDoneDT;

    public Withdrawal() {
    }

    public Withdrawal(Wallet wallet, double withdrawalAmount, Integer withdrawalPaynow, LocalDateTime withdrawalDT, Integer withdrawalVerified) {
        this.wallet = wallet;
        this.withdrawalAmount = withdrawalAmount;
        this.withdrawalPaynow = withdrawalPaynow;
        this.withdrawalDT = withdrawalDT;
        this.withdrawalVerified = 0;
    }

    public Integer getWithdrawalID() {
        return withdrawalID;
    }

    public void setWithdrawalID(Integer withdrawalID) {
        this.withdrawalID = withdrawalID;
    }

    public Wallet getWallet() {
        return wallet;
    }

    public void setWallet(Wallet wallet) {
        this.wallet = wallet;
    }

    public boolean isPendingStatus() {
        return withdrawalVerified == 0;
    }

    public boolean verify(LocalDateTime dt) {
        setWithdrawalDoneDT(dt);
        setWithdrawalVerified(1);

        return true;
    }
    public boolean unverify(LocalDateTime dt) {
        setWithdrawalDoneDT(dt);
        setWithdrawalVerified(-1);

        return true;
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

    public Integer isWithdrawalVerified() {
        return withdrawalVerified;
    }

    public void setWithdrawalVerified(int withdrawalVerified) {
        this.withdrawalVerified = withdrawalVerified;
    }

    public LocalDateTime getWithdrawalDoneDT() {
        return withdrawalDoneDT;
    }

    public void setWithdrawalDoneDT(LocalDateTime withdrawalDoneDT) {
        this.withdrawalDoneDT = withdrawalDoneDT;
    }

    public void setWithdrawalAmount(double withdrawalAmount) {
        this.withdrawalAmount = withdrawalAmount;
    }

    public Integer getWithdrawalVerified() {
        return withdrawalVerified;
    }

    public void setWithdrawalVerified(Integer withdrawalVerified) {
        this.withdrawalVerified = withdrawalVerified;
    }
}
