package com.BackItUp.orbital.repository;


import com.BackItUp.orbital.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface investmentRepo extends JpaRepository<Investment, Integer> {
    List<Investment> findInvestmentByUser(User User);
    List<Investment> findInvestmentByShare(Share share);

}
