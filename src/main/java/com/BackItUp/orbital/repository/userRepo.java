package com.BackItUp.orbital.repository;
import com.BackItUp.orbital.model.User;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface userRepo extends JpaRepository<User, Integer> {

//    @Query(value = "INSERT INTO WALLET(ACTIVE_BALANCE,column_2,column_3) VALUES (value_1,value_2,value_3)")
//    user save(String username);
    List<User> findByUserTypeAndUserVerified(String userType, Boolean userVerified);

}
