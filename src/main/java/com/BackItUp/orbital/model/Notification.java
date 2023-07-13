package com.BackItUp.orbital.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

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

    public static Notification sendNotification(User user, String notificationType,String notificationMessage,LocalDateTime notificationDateTime){
        return new Notification(user,notificationType,notificationMessage,notificationDateTime);
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
    public void readNotification() {
        this.notificationRead = true;
    }

    public LocalDateTime getNotificationDateTime() {
        return notificationDateTime;
    }

    public void setNotificationDateTime(LocalDateTime notificationDateTime) {
        this.notificationDateTime = notificationDateTime;
    }
}
