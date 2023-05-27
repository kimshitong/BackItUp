package com.BackItUp.orbital.model;
import jakarta.persistence.*;

@Entity
@Table(name = "USER")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "USER_ID")
    private Integer USER_ID;

    @Column(name = "USER_NAME")
    private String USER_NAME;
    @Column(name = "USER_EMAIL")
    private String USER_EMAIL;
    @Column(name = "USER_HP")
    private String USER_HP;
    @Column(name = "USER_PASS")
    private String USER_PASS;
    @Column(name = "USER_TYPE")
    private String USER_TYPE;
    @Column(name = "USER_VERIFIED")
    private Boolean USER_VERIFIED;
    @Column(name = "USER_EVIDENCE")
    private byte[] USER_EVIDENCE;
    @OneToOne
    @JoinColumn(name = "WALLET_ID")
    private Wallet wallet;


    public User() {
    }

    public User(CreateUserRequest request, Wallet wallet) {
        this.USER_NAME = request.getUSER_NAME();
        this.USER_EMAIL = request.getUSER_EMAIL();
        this.USER_HP = request.getUSER_HP();
        this.USER_TYPE = request.getUSER_TYPE();
        this.USER_PASS = request.getUSER_PASS();
        this.USER_VERIFIED = false;
        this.wallet = wallet;
    }

    public Integer getUSER_ID() {
        return USER_ID;
    }

    public void setUSER_ID(Integer USER_ID) {
        this.USER_ID = USER_ID;
    }

    public String getUSER_NAME() {
        return USER_NAME;
    }

    public void setUSER_NAME(String USER_NAME) {
        this.USER_NAME = USER_NAME;
    }

    public String getUSER_EMAIL() {
        return USER_EMAIL;
    }

    public void setUSER_EMAIL(String USER_EMAIL) {
        this.USER_EMAIL = USER_EMAIL;
    }

    public String getUSER_HP() {
        return USER_HP;
    }

    public void setUSER_HP(String USER_HP) {
        this.USER_HP = USER_HP;
    }

    public String getUSER_PASS() {
        return USER_PASS;
    }

    public void setUSER_PASS(String USER_PASS) {
        this.USER_PASS = USER_PASS;
    }

    public String getUSER_TYPE() {
        return USER_TYPE;
    }

    public void setUSER_TYPE(String USER_TYPE) {
        this.USER_TYPE = USER_TYPE;
    }

    public Boolean getUSER_VERIFIED() {
        return USER_VERIFIED;
    }

    public void setUSER_VERIFIED(Boolean USER_VERIFIED) {
        this.USER_VERIFIED = USER_VERIFIED;
    }

    public byte[] getUSER_EVIDENCE() {
        return USER_EVIDENCE;
    }

    public void setUSER_EVIDENCE(byte[] USER_EVIDENCE) {
        this.USER_EVIDENCE = USER_EVIDENCE;
    }

    public Wallet getWallet() {
        return wallet;
    }

    public void setWallet(Wallet wallet) {
        this.wallet = wallet;
    }
}
