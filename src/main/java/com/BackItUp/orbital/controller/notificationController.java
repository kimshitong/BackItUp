package com.BackItUp.orbital.controller;

import com.BackItUp.orbital.model.*;
import com.BackItUp.orbital.repository.userRepo;
import com.BackItUp.orbital.repository.notificationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("https://backitup.mysql.database.azure.com/")
public class notificationController {

    @Autowired
    private userRepo userRepository;
    @Autowired
    private notificationRepo notificationRepository;

    @GetMapping("/api/listNotification/read/{user_id}")
    List<Notification> listReadNotification(@PathVariable("user_id") Integer user_id){
        User user = userRepository.findById(user_id).get();
        

        return notificationRepository.findByUserAndNotificationRead(user,true);
    }
    @GetMapping("/api/listNotification/unread/{user_id}")
    List<Notification> listUnreadNotification(@PathVariable("user_id") Integer user_id){
        User user = userRepository.findById(user_id).get();

        List<Notification> notiList= notificationRepository.findByUserAndNotificationRead(user,false);

        for(int i = 0; i < notiList.size(); i++){
            notificationRepository.save(notiList.get(i).readNotification());
        }

        return notiList;
    }
    
    @GetMapping("/api/listNotification/all/{user_id}")
    List<Notification> listAllNotification(@PathVariable("user_id") Integer user_id){
        User user = userRepository.findById(user_id).get();

        List<Notification> notiList =  notificationRepository.findByUser(user);
        for(int i = 0; i < notiList.size(); i++){
            notificationRepository.save(notiList.get(i).readNotification());
        }
        return notiList;

    }

    @GetMapping("/api/readNotification/{notificationid}")
    Boolean readNotification(@PathVariable("notificationid") Integer notificationid){
        try{
            Notification noti = notificationRepository.findById(notificationid).get();
            notificationRepository.save(noti.readNotification());
            return true;
        } catch (Exception e) {
            return false;
        }

    }

    @GetMapping("/api/unreadNotification/{notificationid}")
    Boolean unreadNotification(@PathVariable("notificationid") Integer notificationid){
        try{
            Notification noti = notificationRepository.findById(notificationid).get();
            notificationRepository.save(noti.unreadNotification());
            return true;
        } catch (Exception e) {
            return false;
        }

    }


}
