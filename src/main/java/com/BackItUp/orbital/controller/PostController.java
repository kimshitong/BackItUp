package com.BackItUp.orbital.controller;

import com.BackItUp.orbital.model.*;
import com.BackItUp.orbital.repository.postRepo;
import com.BackItUp.orbital.repository.shareRepo;
import com.BackItUp.orbital.repository.userRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

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

    @GetMapping("/api/listPosts/{status}")
    List<Post> listPostsByStatus(@PathVariable("status") Integer status){
        return postRepository.findByPostStatus(status);
    }



    @GetMapping("/api/post/{id}")
    Post findPost(@PathVariable("id") Integer postId){
        return postRepository.findById(postId).get();
    }


    @GetMapping("/api/post/{verification}/{id}/{dt}")
    boolean verifyPost(@PathVariable("id") Integer postId, @PathVariable("dt") LocalDateTime dt, @PathVariable("verification") String verification){
        Post post = postRepository.findById(postId).get();

        if(post == null || !post.isPendingStatus()) {
            return false;
        }

        if(verification == "verify"){
            post.verify(dt);
        }else if( verification == "unverify"){
            post.unverify(dt);
        }else{
            return false;
        }

        postRepository.save(post);
        return true;
    }


}
