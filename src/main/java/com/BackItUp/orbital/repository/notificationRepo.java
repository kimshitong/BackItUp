package com.BackItUp.orbital.repository;

import com.BackItUp.orbital.model.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface notificationRepo extends JpaRepository<Notification, Integer> {
    
    List<Notification> findByUserAndNotificationRead(User user, Boolean notificationRead);

}
