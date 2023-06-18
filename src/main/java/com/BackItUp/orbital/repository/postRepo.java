package com.BackItUp.orbital.repository;

import com.BackItUp.orbital.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface postRepo extends JpaRepository<Post, Integer> {

    List<Post> findByPostStatusGreaterThanAndPostStatusLessThan(int minStatus, int maxStatus);
    List<Post> findByPostStatus(int PostStatus);

}
