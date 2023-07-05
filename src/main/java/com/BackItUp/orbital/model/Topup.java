package com.BackItUp.orbital.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "topup")
public class Topup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TOPUP_ID")
    private Integer topupID;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "WALLET_ID", nullable = false)
    private Wallet wallet;

    @Column(name = "TOPUP_AMOUNT")
    private double topupAmount;
    @Column(name = "TOPUP_PAYNOW")
    private Integer topupPaynow;

    @Column(name = "TOPUP_EVIDENCE")
    private String topupEvidence;

    @Column(name = "TOPUP_VERIFIED")
    private Integer topupVerified;
    @Column(name = "TOPUP_DT")
    private LocalDateTime topupDT;
    @Column(name = "TOPUP_DONE_DT")
    private LocalDateTime topupDoneDT;

    public Topup() {
    }

    public Topup(Wallet wallet, double topupAmount, Integer topupPaynow, Integer topupVerified, LocalDateTime topupDT, String topupEvidence) {
        this.wallet = wallet;
        this.topupAmount = topupAmount;
        this.topupPaynow = topupPaynow;
        this.topupEvidence = topupEvidence;
        this.topupVerified = topupVerified;
        this.topupDT = topupDT;
        this.topupEvidence = topupEvidence;
    }

    public Integer getTopupID() {
        return topupID;
    }

    public void setTopupID(Integer topupID) {
        this.topupID = topupID;
    }

    public Wallet getWallet() {
        return wallet;
    }

    public void setWallet(Wallet wallet) {
        this.wallet = wallet;
    }

    public double getTopupAmount() {
        return topupAmount;
    }

    public void setTopupAmount(double topupAmount) {
        this.topupAmount = topupAmount;
    }

    public Integer getTopupPaynow() {
        return topupPaynow;
    }

    public void setTopupPaynow(Integer topupPaynow) {
        this.topupPaynow = topupPaynow;
    }

    public String getTopupEvidence() {
        return topupEvidence;
    }

    public void setTopupEvidence(String topupEvidence) {
        this.topupEvidence = topupEvidence;
    }

    public Integer isTopupVerified() {
        return topupVerified;
    }

    public boolean isPendingStatus() {
        return topupVerified == 0;
    }


    public boolean verify(LocalDateTime dt) {
        setTopupDoneDT(dt);
        setTopupVerified(1);

        return true;
    }
    public boolean unverify(LocalDateTime dt) {
        setTopupDoneDT(dt);
        setTopupVerified(-1);

        return true;
    }


    public void setTopupVerified(int topupVerified) {
        this.topupVerified = topupVerified;
    }

    public LocalDateTime getTopupDT() {
        return topupDT;
    }

    public void setTopupDT(LocalDateTime topupDT) {
        this.topupDT = topupDT;
    }

    public LocalDateTime getTopupDoneDT() {
        return topupDoneDT;
    }

    public void setTopupDoneDT(LocalDateTime topupDoneDT) {
        this.topupDoneDT = topupDoneDT;
    }

    public Integer getTopupVerified() {
        return topupVerified;
    }

    public void setTopupVerified(Integer topupVerified) {
        this.topupVerified = topupVerified;
    }
}
