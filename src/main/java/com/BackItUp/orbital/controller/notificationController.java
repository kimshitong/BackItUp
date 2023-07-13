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
@CrossOrigin("http://localhost:3000/")
public class withdrawalController {
    @Autowired
    private userRepo userRepository;
    @Autowired
    private withdrawalRepo notificationRepo;

    @GetMapping("/api/listNotification/read/{user_id}")
    List<Notification> check(@PathVariable("user_id") Integer user_id){
        User user = userRepository.findById(user_id).get();
        

        return notificationRepo.findByUserAndNotificationRead(user,true);
    }
    @GetMapping("/api/listNotification/unread/{user_id}")
    List<Notification> check(@PathVariable("user_id") Integer user_id){
        User user = userRepository.findById(user_id).get();

        List<Notification> notiList= notificationRepo.findByUserandNotificationRead(user,false);

        for(int i = 0; i < notiList.length(); i++){
            notificationRepo.save(notiList[i].readNotification);
        }

        return notiList;
    }
    
    @GetMapping("/api/listNotification/all/{user_id}")
    List<Notification> check(@PathVariable("user_id") Integer user_id){
        User user = userRepository.findById(user_id).get();

        return notificationRepo.findByUser(user);
    }

}
