package com.BackItUp.orbital.model;

import jakarta.persistence.*;

@Entity
@Table(name = "ADMIN")
public class admin {

    @Id
    @Column(name = "ADMIN_ID")
    private String ADMIN_ID;

    @Column(name = "ADMIN_PASS")
    private String ADMIN_PASS;

    // Getters and setters
}
