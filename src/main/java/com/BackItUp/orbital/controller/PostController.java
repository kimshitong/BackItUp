package com.BackItUp.orbital.controller;

import com.BackItUp.orbital.model.Post;
import com.BackItUp.orbital.repository.postRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class PostController {
    @Autowired
    private postRepo PostRepository;

    @GetMapping("/api/listPost")
    public List<Post> getAllPosts() {
        return PostRepository.findAll();
    }
}
