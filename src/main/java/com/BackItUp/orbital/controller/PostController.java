package com.BackItUp.orbital.controller;

import com.BackItUp.orbital.model.*;
import com.BackItUp.orbital.repository.notificationRepo;
import com.BackItUp.orbital.repository.postRepo;
import com.BackItUp.orbital.repository.shareRepo;
import com.BackItUp.orbital.repository.userRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("https://backitup.mysql.database.azure.coml.database.azure.com/")
public class PostController {
    @Autowired
    private userRepo userRepository;
    @Autowired
    private shareRepo shareRepository;
    @Autowired
    private notificationRepo notificationRepository;
    @Autowired
    private postRepo postRepository;

    @PostMapping("/api/createPost")
    Post newPost(@RequestBody PostCreation response) {

        User Company = userRepository.findById(response.getUserID()).get();

        Share newShare = new Share(Company,response.getShareCountTotal(),response.getShareCountMin(),response.getShareCountCurrent(),response.getShareCountPrice());

        shareRepository.save(newShare);

        Post newPost = new Post(Company, newShare,response);

        return postRepository.save(newPost);
    }
    @GetMapping("/api/listPosts")
    List<Post> listPosts(){
        return postRepository.findAll();
    }

    @GetMapping("/api/listPosts/status/{status}")
    List<Post> listPostsByStatus(@PathVariable("status") Integer status){
        return postRepository.findByPostStatus(status);
    }


    @GetMapping("/api/listPosts/comp/{compID}")
    List<Post> listPostsByComp(@PathVariable("compID") Integer compID ){
        Optional<User> optionalUser = userRepository.findById(compID);

        if (optionalUser.isEmpty()) {
            return null;
        }

        return postRepository.findByUser(optionalUser.get());
    }

    @GetMapping("/api/post/{id}")
    Post findPost(@PathVariable("id") Integer postId){
        return postRepository.findById(postId).get();
    }

    @GetMapping("/api/postbyshare/{id}")
    Post findPostbyShare(@PathVariable("id") Integer shareId){
        Optional<Share> optionalShare = shareRepository.findById(shareId);

        if (optionalShare.isEmpty()) {
            return null;
        }

        return postRepository.findByShare(optionalShare.get());
    }


    @GetMapping("/api/post/{verification}/{id}/{dt}")
    boolean verifyPost(@PathVariable("id") Integer postId, @PathVariable("dt") LocalDateTime dt, @PathVariable("verification") String verification){
        Post post = postRepository.findById(postId).get();

        if(post == null) {
            return false;
        }

        if(verification.equals("verify")){
            post.verify(dt);
            postRepository.save(post);
            notificationRepository.save(Notification.sendPostSuccessNotification(post.getUser(),post));
        }else if( verification.equals("unverify")){
            post.unverify(dt);
            postRepository.save(post);

        }else{
            return false;
        }
        return true;
    }

    @PostMapping("/api/editPost/{postid}")
    boolean editPost(@PathVariable("postid") Integer postId, @RequestBody PostEdit response) {
        
        Post post = postRepository.findById(postId).get();
        
        if(post == null) {
            return false;
        }

        post.editPost(response);
        postRepository.save(post);

        return true;
    }

    @PostMapping("/api/post/submitPhoto/{postID}")
    String submitPhoto(@PathVariable("postID") Integer postID, @RequestParam("file") MultipartFile file) {
        try {
            // Configure the destination directory
            String uploadDir = "backitup-front/public/images/post/";

            LocalDateTime datetime1 = LocalDateTime.now();
            DateTimeFormatter format = DateTimeFormatter.ofPattern("dd-MM-yyyy-HH-mm-ss");
            String formatDateTime = datetime1.format(format);

            String filename = formatDateTime + '-' + file.getOriginalFilename();
            Path filePath = Path.of(uploadDir, filename);

            // Save the file to the destination directory
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            String dbURL = "/images/post/" + filename;

            Post post = postRepository.findById(postID).get();
            post.setPostPhotoURL(dbURL);
            postRepository.save(post);

            // Handle success
            System.out.println("Image uploaded successfully");
            return post.getPostPhotoURL();
        } catch (Exception e) {
            // Handle error
            System.err.println("Error uploading image: " + e.getMessage());
            return "Fail";
        }

    }


}
