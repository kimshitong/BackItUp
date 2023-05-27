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
}
