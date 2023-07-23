package com.BackItUp.orbital.repository;
import com.BackItUp.orbital.model.User;

import com.BackItUp.orbital.model.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface userRepo extends JpaRepository<User, Integer> {

//    @Query(value = "INSERT INTO WALLET(ACTIVE_BALANCE,column_2,column_3) VALUES (value_1,value_2,value_3)")
//    user save(String username);
    List<User> findByUserTypeAndUserVerified(String userType, Integer userVerified);
    Optional<User> findByUserEmailAndUserPass(String userEmail, String userPass);
    User findByUserEmail(String userEmail);
    User findByWallet(Wallet wallet);
    Optional<User> findByUserOauthIdentifierAndUserOauthType(String userOauthIdentifier,String userOauthType);

}
