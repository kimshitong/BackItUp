package com.BackItUp.orbital.repository;
import com.BackItUp.orbital.model.user;

import org.springframework.data.jpa.repository.JpaRepository;

public interface userRepo extends JpaRepository<user, Integer> {
}
