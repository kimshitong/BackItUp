package com.BackItUp.orbital.model;

import java.time.LocalDateTime;

public class PostEdit {
    private String postTitle;
    private String postDescription;
    private String postContent;
    private String postURL;
    private LocalDateTime postExpireDT;
    private boolean postSustainable;

    // Constructors, getters, and setters
    public PostEdit(String postTitle, String postDescription, String postContent, String postURL, boolean postSustainable, LocalDateTime postExpireDT) {
        this.postTitle = postTitle;
        this.postDescription = postDescription;
        this.postContent = postContent;
        this.postURL = postURL;
        this.postSustainable = postSustainable;
        this.postExpireDT = postExpireDT;
    }

    public LocalDateTime getPostExpireDT() {
        return postExpireDT;
    }

    public boolean isPostSustainable() {
        return postSustainable;
    }

    public void setPostSustainable(boolean postSustainable) {
        this.postSustainable = postSustainable;
    }

    public void setPostExpireDT(LocalDateTime postExpireDT) {
        this.postExpireDT = postExpireDT;
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

}

