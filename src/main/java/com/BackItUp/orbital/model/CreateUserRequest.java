package com.BackItUp.orbital.model;

public class CreateUserRequest{
    private String USER_NAME;
    private String USER_HP;
    private String USER_EMAIL;
    private String USER_PASS;
    private String USER_TYPE;

    // Generate getters and setters for the fields

    public CreateUserRequest(String USER_NAME, String USER_HP, String USER_EMAIL, String USER_PASS, String USER_TYPE) {
        this.USER_NAME = USER_NAME;
        this.USER_HP = USER_HP;
        this.USER_EMAIL = USER_EMAIL;
        this.USER_PASS = USER_PASS;
        this.USER_TYPE = USER_TYPE;
    }

    public String getUSER_NAME() {
        return USER_NAME;
    }

    public String getUSER_HP() {
        return USER_HP;
    }

    public String getUSER_EMAIL() {
        return USER_EMAIL;
    }

    public String getUSER_PASS() {
        return USER_PASS;
    }

    public String getUSER_TYPE() {
        return USER_TYPE;
    }
}
