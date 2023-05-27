package com.BackItUp.orbital.model;

import jakarta.persistence.*;

@Entity
@Table(name = "INVESTMENT")
public class Investment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "INVEST_ID")
    private int investId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "SHARE_ID", nullable = false)
    private Share share;

    @Column(name = "SHARE_AMOUNT", nullable = false)
    private int shareAmount;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PAYMENT_ID", nullable = false)
    private Payment payment;

    @Column(name = "INVEST_DT", nullable = false)
    private int investDt;

    @Column(name = "INVEST_ACTIVE", nullable = false)
    private int investActive;

    public int getInvestId() {
        return investId;
    }

    public void setInvestId(int investId) {
        this.investId = investId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Share getShare() {
        return share;
    }

    public void setShare(Share share) {
        this.share = share;
    }

    public int getShareAmount() {
        return shareAmount;
    }

    public void setShareAmount(int shareAmount) {
        this.shareAmount = shareAmount;
    }

    public Payment getPayment() {
        return payment;
    }

    public void setPayment(Payment payment) {
        this.payment = payment;
    }

    public int getInvestDt() {
        return investDt;
    }

    public void setInvestDt(int investDt) {
        this.investDt = investDt;
    }

    public int getInvestActive() {
        return investActive;
    }

    public void setInvestActive(int investActive) {
        this.investActive = investActive;
    }
}