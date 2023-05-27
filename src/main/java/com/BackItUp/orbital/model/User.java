package com.BackItUp.orbital.model;
import jakarta.persistence.*;

@Entity
@Table(name = "USER")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "USER_ID")
    private Integer userID;

    @Column(name = "USER_NAME")
    private String userName;
    @Column(name = "USER_EMAIL")
    private String userEmail;
    @Column(name = "USER_HP")
    private String userHP;
    @Column(name = "USER_PASS")
    private String userPass;
    @Column(name = "USER_TYPE")
    private String userType;
    @Column(name = "USER_VERIFIED")
    private Boolean userVerified;
    @Column(name = "USER_EVIDENCE")
    private byte[] userEvidence;
    @OneToOne
    @JoinColumn(name = "WALLET_ID")
    private Wallet wallet;


    public User() {
    }

    public User(CreateUserRequest request, Wallet wallet) {
        this.userName = request.getUSER_NAME();
        this.userEmail = request.getUSER_EMAIL();
        this.userHP = request.getUSER_HP();
        this.userType = request.getUSER_TYPE();
        this.userPass = request.getUSER_PASS();
        this.userVerified = false;
        this.wallet = wallet;
    }

    public Integer getUserID() {
        return userID;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserHP() {
        return userHP;
    }

    public void setUserHP(String userHP) {
        this.userHP = userHP;
    }

    public String getUserPass() {
        return userPass;
    }

    public void setUserPass(String userPass) {
        this.userPass = userPass;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public Boolean getUserVerified() {
        return userVerified;
    }

    public void setUserVerified(Boolean userVerified) {
        this.userVerified = userVerified;
    }

    public byte[] getUserEvidence() {
        return userEvidence;
    }

    public void setUserEvidence(byte[] userEvidence) {
        this.userEvidence = userEvidence;
    }

    public Wallet getWallet() {
        return wallet;
    }

    public void setWallet(Wallet wallet) {
        this.wallet = wallet;
    }
}
