package com.BackItUp.orbital.model;

import jakarta.persistence.*;

@Entity
@Table(name = "SHARE")
public class Share {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SHARE_ID")
    private Integer shareId;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @Column(name = "SHARE_COUNT_TOTAL")
    private Integer shareCountTotal;
    @Column(name = "SHARE_COUNT_MIN")
    private Integer shareCountMin;

    @Column(name = "SHARE_COUNT_CURRENT")
    private Integer shareCountCurrent;

    @Column(name = "SHARE_COUNT_PRICE")
    private double shareCountPrice;

    @Column(name = "SHARE_DIVIDEND")
    private Integer shareDividend;

    // Getters and setters
    public Share(){}

    public Share(User user, Integer shareCountTotal, Integer shareCountMin, Integer shareCountCurrent, double shareCountPrice) {
        this.user = user;
        this.shareCountTotal = shareCountTotal;
        this.shareCountMin = shareCountMin;
        this.shareCountCurrent = shareCountCurrent;
        this.shareCountPrice = shareCountPrice;
    }

    public void setShareCountPrice(double shareCountPrice) {
        this.shareCountPrice = shareCountPrice;
    }

    public Integer getShareId() {
        return shareId;
    }

    public void setShareId(Integer shareId) {
        this.shareId = shareId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Integer getRemainingShare() {
        return shareCountTotal - shareCountMin;
    }

    public Integer getShareCountTotal() {
        return shareCountTotal;
    }

    public void setShareCountTotal(Integer shareCountTotal) {
        this.shareCountTotal = shareCountTotal;
    }

    public Integer getShareCountMin() {
        return shareCountMin;
    }

    public void setShareCountMin(Integer shareCountMin) {
        this.shareCountMin = shareCountMin;
    }

    public Integer getShareCountCurrent() {
        return shareCountCurrent;
    }

    public void setShareCountCurrent(Integer shareCountCurrent) {
        this.shareCountCurrent = shareCountCurrent;
    }
    public double SharePriceCalculator(int amount) {
        return shareCountPrice * amount;
    }

    public double getShareCountPrice() {
        return shareCountPrice;
    }

    public void setShareCountPrice(Long shareCountPrice) {
        this.shareCountPrice = shareCountPrice;
    }

    public Integer getShareDividend() {
        return shareDividend;
    }

    public void setShareDividend(Integer shareDividend) {
        this.shareDividend = shareDividend;
    }

    public Boolean validSharePurchaseAmount(Integer shareAmount) {
        return shareAmount < getShareCountMin();
    }
    public Boolean sufficientShare(Integer shareAmount) {
        return shareAmount > getRemainingShare();
    }
}
