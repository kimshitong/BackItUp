package com.BackItUp.orbital.repository;

import com.BackItUp.orbital.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface postRepo extends JpaRepository<Post, Integer> {

}
