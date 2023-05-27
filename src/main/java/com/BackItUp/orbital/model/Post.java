package com.BackItUp.orbital.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "Post")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "POST_ID")
    private Integer POST_ID;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @Column(name = "POST_TITLE")
    private String POST_TITLE;

    @Column(name = "POST_CONTENT")
    private String POST_CONTENT;

    @Column(name = "POST_URL")
    private String POST_URL;

    @OneToOne
    @JoinColumn(name = "SHARE_ID")
    private Share SHARE_ID;

    @Column(name = "POST_STATUS")
    private Integer POST_STATUS;

    @Column(name = "POST_RAISE_MIN")
    private Integer POST_RAISE_MIN;

    @Column(name = "POST_CREATE_DT")
    private LocalDateTime POST_CREATE_DT;

    @Column(name = "POST_APPROVED_DT")
    private LocalDateTime POST_APPROVED_DT;

    @Column(name = "POST_RAISE_DT")
    private LocalDateTime POST_RAISE_DT;

    @Column(name = "POST_EXPIRE_DT")
    private LocalDateTime POST_EXPIRE_DT;

    @Column(name = "POST_FINALISING_DT")
    private LocalDateTime POST_FINALISING_DT;

    @Column(name = "POST_COMPLETED_DT")
    private LocalDateTime POST_COMPLETED_DT;

    // Getters and setters


    public Integer getPOST_ID() {
        return POST_ID;
    }

    public void setPOST_ID(Integer POST_ID) {
        this.POST_ID = POST_ID;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getPOST_TITLE() {
        return POST_TITLE;
    }

    public void setPOST_TITLE(String POST_TITLE) {
        this.POST_TITLE = POST_TITLE;
    }

    public String getPOST_CONTENT() {
        return POST_CONTENT;
    }

    public void setPOST_CONTENT(String POST_CONTENT) {
        this.POST_CONTENT = POST_CONTENT;
    }

    public String getPOST_URL() {
        return POST_URL;
    }

    public void setPOST_URL(String POST_URL) {
        this.POST_URL = POST_URL;
    }

    public Share getSHARE_ID() {
        return SHARE_ID;
    }

    public void setSHARE_ID(Share SHARE_ID) {
        this.SHARE_ID = SHARE_ID;
    }

    public Integer getPOST_STATUS() {
        return POST_STATUS;
    }

    public void setPOST_STATUS(Integer POST_STATUS) {
        this.POST_STATUS = POST_STATUS;
    }

    public Integer getPOST_RAISE_MIN() {
        return POST_RAISE_MIN;
    }

    public void setPOST_RAISE_MIN(Integer POST_RAISE_MIN) {
        this.POST_RAISE_MIN = POST_RAISE_MIN;
    }

    public LocalDateTime getPOST_CREATE_DT() {
        return POST_CREATE_DT;
    }

    public void setPOST_CREATE_DT(LocalDateTime POST_CREATE_DT) {
        this.POST_CREATE_DT = POST_CREATE_DT;
    }

    public LocalDateTime getPOST_APPROVED_DT() {
        return POST_APPROVED_DT;
    }

    public void setPOST_APPROVED_DT(LocalDateTime POST_APPROVED_DT) {
        this.POST_APPROVED_DT = POST_APPROVED_DT;
    }

    public LocalDateTime getPOST_RAISE_DT() {
        return POST_RAISE_DT;
    }

    public void setPOST_RAISE_DT(LocalDateTime POST_RAISE_DT) {
        this.POST_RAISE_DT = POST_RAISE_DT;
    }

    public LocalDateTime getPOST_EXPIRE_DT() {
        return POST_EXPIRE_DT;
    }

    public void setPOST_EXPIRE_DT(LocalDateTime POST_EXPIRE_DT) {
        this.POST_EXPIRE_DT = POST_EXPIRE_DT;
    }

    public LocalDateTime getPOST_FINALISING_DT() {
        return POST_FINALISING_DT;
    }

    public void setPOST_FINALISING_DT(LocalDateTime POST_FINALISING_DT) {
        this.POST_FINALISING_DT = POST_FINALISING_DT;
    }

    public LocalDateTime getPOST_COMPLETED_DT() {
        return POST_COMPLETED_DT;
    }

    public void setPOST_COMPLETED_DT(LocalDateTime POST_COMPLETED_DT) {
        this.POST_COMPLETED_DT = POST_COMPLETED_DT;
    }
}



