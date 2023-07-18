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
    @Column(name = "USER_VERIFIED", columnDefinition = "DEFAULT 0")
    private Integer userVerified;
    @Column(name = "USER_SHOWCONTACT", columnDefinition = "DEFAULT FALSE")
    private boolean userShowContact;

    @Column(name = "USER_LINKEDINLINK", columnDefinition = "TEXT")
    private String userLinkedinLink;
    @Column(name = "USER_PHOTOURL", columnDefinition = "TEXT")
    private String userPhotoURL;

    @Column(name = "USER_OAUTHTYPE")
    private String userOauthType;
    @Column(name = "USER_OAUTHIDENTIFIER", columnDefinition = "TEXT")
    private String userOauthIdentifier;
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

    public User(String userName, String userEmail, String userHP, String userPass, String userType, String userEvidence, String userLinkedinLink, boolean userShowContact) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userHP = userHP;
        this.userPass = userPass;
        this.userType = userType;
        this.userVerified = 0;
        this.userEvidence = userEvidence;
        this.userOauthType = "USER";
        this.userLinkedinLink = userLinkedinLink;
        this.userShowContact = userShowContact;
    }

    public User(String userName, String userEmail, String userHP, String userPass, String userLinkedinLink, boolean userShowContact) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userHP = userHP;
        this.userPass = userPass;
        this.userType = "Company";
        this.userVerified = 1;
        this.userEvidence = "Company Account";
        this.userOauthType = "USER";
        this.userLinkedinLink = userLinkedinLink;
        this.userShowContact = userShowContact;
    }   

    public User(String userName, String userEmail, String userHP, String userPass, String userType,  String userOauthType, String userOauthIdentifier, String userEvidence,String userLinkedinLink, boolean userShowContact) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userHP = userHP;
        this.userPass = userPass;
        this.userType = userType;
        this.userOauthType = userOauthType; // could be GITHUB/FB/GOOGLE
        this.userOauthIdentifier = userOauthIdentifier;
        this.userEvidence = userEvidence;
        this.userVerified = 0;
        this.userDescription = "User Account by Auth:" +userType;

        this.userLinkedinLink = userLinkedinLink;
        this.userShowContact = userShowContact;
    }   

    public void editUser(UserEdit resp){
        this.userName = resp.getUserName();
        this.userEmail = resp.getUserEmail();
        this.userHP = resp.getUserHP();
        this.userPass = resp.getUserPass();
        this.userType = resp.getUserType();
        this.userEvidence = resp.getUserEvidence();
        this.userLinkedinLink = resp.getUserLinkedinLink();
        this.userShowContact = resp.isUserShowContact();
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

    public String getUserPhotoURL() {
        return userPhotoURL;
    }

    public void setUserPhotoURL(String userPhotoURL) {
        this.userPhotoURL = userPhotoURL;
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

    public String getUserOauthType() {
        return userOauthType;
    }

    public void setUserOauthType(String userOauthType) {
        this.userOauthType = userOauthType;
    }

    public String getUserOauthIdentifier() {
        return userOauthIdentifier;
    }

    public void setUserOauthIdentifier(String userOauthIdentifier) {
        this.userOauthIdentifier = userOauthIdentifier;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public Integer getUserVerified() {
        return userVerified;
    }

    public void setUserVerified(Integer userVerified) {
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
    public boolean isUserShowContact() {
        return userShowContact;
    }

    public void setUserShowContact(boolean userShowContact) {
        this.userShowContact = userShowContact;
    }

    public String getUserLinkedinLink() {
        return userLinkedinLink;
    }

    public void setUserLinkedinLink(String userLinkedinLink) {
        this.userLinkedinLink = userLinkedinLink;
    }





}
