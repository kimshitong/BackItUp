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
    private Integer shareCountPrice;

    @Column(name = "SHARE_DIVIDEND")
    private Integer shareDividend;

    // Getters and setters


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

    public Integer getShareCountPrice() {
        return shareCountPrice;
    }

    public void setShareCountPrice(Integer shareCountPrice) {
        this.shareCountPrice = shareCountPrice;
    }

    public Integer getShareDividend() {
        return shareDividend;
    }

    public void setShareDividend(Integer shareDividend) {
        this.shareDividend = shareDividend;
    }
}
