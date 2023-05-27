package com.BackItUp.orbital.controller;

import com.BackItUp.orbital.model.Post;
import com.BackItUp.orbital.model.User;
import com.BackItUp.orbital.repository.postRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class PostController {
    @Autowired
    private postRepo PostRepository;

    @GetMapping("/api/listPost")
    public List<Post> getAllPosts() {
        return PostRepository.findAll();
    }

    @GetMapping("/{id}/post")
    public Post findPost(@PathVariable("id") Integer POST_ID) {
        // Retrieve the user record from the database
        Optional<Post> optionalPost = PostRepository.findById(POST_ID);

        Post post = optionalPost.get();

        // Update the user_verified field

        return post;
    }
}
