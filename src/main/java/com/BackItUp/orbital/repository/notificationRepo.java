package com.BackItUp.orbital.repository;

import com.BackItUp.orbital.model.Notification;
import com.BackItUp.orbital.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface notificationRepo extends JpaRepository<Notification, Integer> {

    List<Notification> findByUserAndNotificationRead(User user, Boolean notificationRead);
    List<Notification> findByUser(User user);

}
