package com.BackItUp.orbital.model;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class user {

    @Id
    @GeneratedValue
    private Integer USER_ID;
    private String USER_NAME;
    private String USER_EMAIL;
    private String USER_HP;
    private String USER_PASS;
    private String USER_TYPE;
    private Boolean USER_VERIFIED;
    private byte[] USER_EVIDENCE;
    private Integer WALLET_ID;

    public user() {
    }

    public user(String USER_NAME, String USER_HP,String USER_EMAIL, String USER_PASS, String USER_TYPE, Boolean USER_VERIFIED, Integer WALLET_ID) {
        this.USER_NAME = USER_NAME;
        this.USER_HP = USER_HP;
        this.USER_EMAIL = USER_EMAIL;
        this.USER_PASS = USER_PASS;
        this.USER_TYPE = USER_TYPE;
        this.USER_VERIFIED = USER_VERIFIED;
        this.WALLET_ID = WALLET_ID;
    }
}
