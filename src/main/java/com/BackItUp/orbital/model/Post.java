package com.BackItUp.orbital.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "Post")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "POST_ID")
    private Integer postID;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @Column(name = "POST_TITLE")
    private String postTitle;

    @Column(name = "POST_DESCRIPTION")
    private String postDescription;

    @Column(name = "POST_CONTENT")
    private String postContent;

    @Column(name = "POST_URL")
    private String postURL;

    @OneToOne
    @JoinColumn(name = "SHARE_ID")
    private Share share;

    @Column(name = "POST_STATUS")
    private Integer postStatus;

    @Column(name = "POST_RAISE_MIN")
    private Integer postRaiseMin;

    @Column(name = "POST_CREATE_DT")
    private LocalDateTime postCreateDT;

    @Column(name = "POST_APPROVED_DT")
    private LocalDateTime postApprovedDT;

    @Column(name = "POST_RAISE_DT")
    private LocalDateTime postRaisedDT;

    @Column(name = "POST_EXPIRE_DT")
    private LocalDateTime postExpireDT;

    @Column(name = "POST_FINALISING_DT")
    private LocalDateTime postFinalisingDT;

    @Column(name = "POST_COMPLETED_DT")
    private LocalDateTime postCompletedDT;

    // Getters and setters

    public Integer getPostID() {
        return postID;
    }

    public void setPostID(Integer postID) {
        this.postID = postID;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getPostTitle() {
        return postTitle;
    }

    public void setPostTitle(String postTitle) {
        this.postTitle = postTitle;
    }

    public String getPostDescription() {
        return postDescription;
    }

    public void setPostDescription(String postDescription) {
        this.postDescription = postDescription;
    }

    public String getPostContent() {
        return postContent;
    }

    public void setPostContent(String postContent) {
        this.postContent = postContent;
    }

    public String getPostURL() {
        return postURL;
    }

    public void setPostURL(String postURL) {
        this.postURL = postURL;
    }

    public Share getShare() {
        return share;
    }

    public void setShare(Share share) {
        this.share = share;
    }

    public Integer getPostStatus() {
        return postStatus;
    }

    public void setPostStatus(Integer postStatus) {
        this.postStatus = postStatus;
    }

    public Integer getPostRaiseMin() {
        return postRaiseMin;
    }

    public void setPostRaiseMin(Integer postRaiseMin) {
        this.postRaiseMin = postRaiseMin;
    }

    public LocalDateTime getPostCreateDT() {
        return postCreateDT;
    }

    public void setPostCreateDT(LocalDateTime postCreateDT) {
        this.postCreateDT = postCreateDT;
    }

    public LocalDateTime getPostApprovedDT() {
        return postApprovedDT;
    }

    public void setPostApprovedDT(LocalDateTime postApprovedDT) {
        this.postApprovedDT = postApprovedDT;
    }

    public LocalDateTime getPostRaisedDT() {
        return postRaisedDT;
    }

    public void setPostRaisedDT(LocalDateTime postRaisedDT) {
        this.postRaisedDT = postRaisedDT;
    }

    public LocalDateTime getPostExpireDT() {
        return postExpireDT;
    }

    public void setPostExpireDT(LocalDateTime postExpireDT) {
        this.postExpireDT = postExpireDT;
    }

    public LocalDateTime getPostFinalisingDT() {
        return postFinalisingDT;
    }

    public void setPostFinalisingDT(LocalDateTime postFinalisingDT) {
        this.postFinalisingDT = postFinalisingDT;
    }

    public LocalDateTime getPostCompletedDT() {
        return postCompletedDT;
    }

    public void setPostCompletedDT(LocalDateTime postCompletedDT) {
        this.postCompletedDT = postCompletedDT;
    }
}



