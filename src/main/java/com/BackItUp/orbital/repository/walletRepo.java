package com.BackItUp.orbital.repository;


import com.BackItUp.orbital.model.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface walletRepo extends JpaRepository<Wallet, Integer> {

}
