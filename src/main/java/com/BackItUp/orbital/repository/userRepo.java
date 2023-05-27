package com.BackItUp.orbital.repository;
import com.BackItUp.orbital.model.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface userRepo extends JpaRepository<user, Integer> {

//    @Query(value = "INSERT INTO WALLET(ACTIVE_BALANCE,column_2,column_3) VALUES (value_1,value_2,value_3)")
//    user save(String username);


}
