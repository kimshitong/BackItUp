package com.BackItUp.orbital.repository;


import com.BackItUp.orbital.model.Investment;
import com.BackItUp.orbital.model.Withdrawal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface investmentRepo extends JpaRepository<Investment, Integer> {

}