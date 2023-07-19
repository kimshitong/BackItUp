package com.BackItUp.orbital.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "NOTIFICATION")
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "NOTI_ID")
    private Integer notificationID;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "USER_ID", nullable = false)
    private User user;

    @Column(name = "NOTI_TYPE")
    private String notificationType;

    @Column(name = "NOTI_MESSAGE")
    private String notificationMessage;

    @Column(name = "NOTI_READ")
    private Boolean notificationRead;

    @Column(name = "NOTI_DT")
    private LocalDateTime notificationDateTime;

    public Notification(){}
    public Notification(User user, String notificationType,String notificationMessage,LocalDateTime notificationDateTime) {
        this.user = user;
        this.notificationType = notificationType;
        this.notificationMessage = notificationMessage;
        this.notificationRead = false;
        this.notificationDateTime = notificationDateTime;
    }

    public Notification(User user, String notificationType,String notificationMessage) {
        this.user = user;
        this.notificationType = notificationType;
        this.notificationMessage = notificationMessage;
        this.notificationRead = false;
        this.notificationDateTime = LocalDateTime.now();
    }


    public static Notification sendVerifiedNotification(User user){
        return new Notification(user,"USER","Congrats! Your account has been verified.");
    }

    public static Notification sendNotification(User user, String notificationType,String notificationMessage,LocalDateTime notificationDateTime){
        return new Notification(user,notificationType,notificationMessage,notificationDateTime);
    }


    public static Notification sendPostSuccessNotification(User user, Post post){
        return new Notification(user,"POST","Your post " + post.getPostTitle() +" has been approved.");
    }

    public static Notification sendWithdrawalSuccessNotification(User user, Withdrawal withdraw ){
        return new Notification(user,"WITHDRAWAL","You have successfully withdrawn " + withdraw.getWithdrawalAmount() + " !");
    }

    public static Notification sendTopupSuccessNotification(User user, Topup topup ){
        return new Notification(user,"TOPUP","You have successfully topped up " + topup.getTopupAmount() +" !");
    }

    public static List<Notification> sendInvestSuccessNotification(Investment investment){
        User company = investment.getShare().getUser();
        User investor = investment.getUser();
        double amount = investment.getPayment().getPaymentAmount();

        List<Notification> notificationList = new ArrayList<>();
        notificationList.add( new Notification(investor,"INVESTMENT","You have successfully invested $" + amount +" in "+company.getUserName()+" !"));
        notificationList.add( new Notification(company,"INVESTMENT","You have received investment from "+investor.getUserName()+"at value of $" +amount + " !"));

        return notificationList;
    }
    public Notification readNotification() {
        this.notificationRead = true;
        return this;
    }

    public Notification unreadNotification() {
        this.notificationRead = false;
        return this;
    }


    public Integer getNotificationID() {
        return notificationID;
    }

    public void setNotificationID(Integer notificationID) {
        this.notificationID = notificationID;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }



    public String getNotificationType() {
        return notificationType;
    }

    public void setNotificationType(String notificationType) {
        this.notificationType = notificationType;
    }

    public String getNotificationMessage() {
        return notificationMessage;
    }

    public void setNotificationMessage(String notificationMessage) {
        this.notificationMessage = notificationMessage;
    }

    public Boolean getNotificationRead() {
        return notificationRead;
    }

    public void setNotificationRead(Boolean notificationRead) {
        this.notificationRead = notificationRead;
    }

    public LocalDateTime getNotificationDateTime() {
        return notificationDateTime;
    }

    public void setNotificationDateTime(LocalDateTime notificationDateTime) {
        this.notificationDateTime = notificationDateTime;
    }
}
