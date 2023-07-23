package com.BackItUp.orbital.repository;

import com.BackItUp.orbital.model.Post;
import com.BackItUp.orbital.model.Share;
import com.BackItUp.orbital.model.User;
import com.BackItUp.orbital.model.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface postRepo extends JpaRepository<Post, Integer> {

    List<Post> findByPostStatusGreaterThanAndPostStatusLessThan(int minStatus, int maxStatus);
    List<Post> findByPostStatus(int PostStatus);
    List<Post> findByUser(User user);

    Post findByShare(Share share);


}
