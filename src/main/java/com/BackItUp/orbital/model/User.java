package com.BackItUp.orbital.model;
import com.BackItUp.orbital.repository.userRepo;
import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Autowired;

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
    @Column(name = "USER_ACCOUNT")
    private String userAccount;
    @Column(name = "USER_AUTHURL", columnDefinition = "TEXT")
    private String userAuthURL;
    @Column(name = "USER_EVIDENCE", columnDefinition = "TEXT")
    private String userEvidence;
    @Column(name = "USER_DESCRIPTION", columnDefinition = "TEXT")
    private String userDescription;
    @OneToOne
    @JoinColumn(name = "WALLET_ID")
    private Wallet wallet;

    @OneToOne
    @JoinColumn(name = "CREATOR_ID")
    private User creator;

    public User() {
    }

    public User(String userName, String userEmail, String userHP, String userPass, String userType, Boolean userVerified, String userEvidence) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userHP = userHP;
        this.userPass = userPass;
        this.userType = userType;
        this.userVerified = userVerified;
        this.userEvidence = userEvidence;
        this.userAccount = "USER";
    }

    public User(String userName, String userEmail, String userHP, String userPass) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userHP = userHP;
        this.userPass = userPass;
        this.userType = "Company";
        this.userAccount = "USER";
        this.userVerified = true;
        this.userEvidence = "Company Account";
    }   

    public User(String userName, String userEmail, String userAuthURL, String userHP, String userPass) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userHP = userHP;
        this.userPass = userPass;
        this.userType = "Company";
        this.userAccount = "USER";
        this.userAuthURL = userAuthURL;
        this.userVerified = true;
        this.userEvidence = "Company Account";
    }   

    public void editUser(UserEdit resp){
        this.userName = resp.getUserName();
        this.userEmail = resp.getUserEmail();
        this.userHP = resp.getUserHP();
        this.userPass = resp.getUserPass();
        this.userType = resp.getUserType();
        this.userEvidence = resp.getUserEvidence();
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

    public User getCreator() {
        return creator;
    }

    public void setCreator(User creator) {
        this.creator = creator;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserDescription() {
        return userDescription;
    }

    public void setUserDescription(String userDescription) {
        this.userDescription = userDescription;
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

    public String getUserEvidence() {
        return userEvidence;
    }

    public void setUserEvidence(String userEvidence) {
        this.userEvidence = userEvidence;
    }

    public Wallet getWallet() {
        return wallet;
    }

    public void setWallet(Wallet wallet) {
        this.wallet = wallet;
    }


}
