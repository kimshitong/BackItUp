package com.BackItUp.orbital.model;
import jakarta.persistence.*;

public class UserEdit {
    private String userName;
    private String userEmail;
    private String userHP;
    private String userPass;
    private String userType;
    private String userEvidence;

    public UserEdit() {
    }

    public UserEdit(String userName, String userEmail, String userHP, String userPass, String userType, String userEvidence) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userHP = userHP;
        this.userPass = userPass;
        this.userType = userType;
        this.userEvidence = userEvidence;
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

    public String getUserEvidence() {
        return userEvidence;
    }

    public void setUserEvidence(String userEvidence) {
        this.userEvidence = userEvidence;
    }
}
