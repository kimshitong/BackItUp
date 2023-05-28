package com.BackItUp.orbital.controller;

import com.BackItUp.orbital.model.*;
import com.BackItUp.orbital.repository.postRepo;
import com.BackItUp.orbital.repository.shareRepo;
import com.BackItUp.orbital.repository.userRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class PostController {
    @Autowired
    private userRepo userRepository;
    @Autowired
    private shareRepo shareRepository;
    @Autowired
    private postRepo postRepository;

    @PostMapping("/api/createPost")
    Post newPost(@RequestBody PostCreation response) {

        User Company = userRepository.findById(response.getUserID()).get();

        Share newShare = new Share(Company,response.getShareCountTotal(),response.getShareCountMin(),response.getShareCountCurrent(),response.getShareCountPrice());

        shareRepository.save(newShare);

        Post newPost = new Post(Company, response.getPostTitle(), response.getPostDescription(), response.getPostContent(),response.getPostURL(),newShare,response.getPostStatus(),response.getPostCreateDT(),response.getPostExpiredDT());

        return postRepository.save(newPost);
    }
    @GetMapping("/api/listPosts")
    List<Post> listPosts(){
        return postRepository.findAll();
    }

}
