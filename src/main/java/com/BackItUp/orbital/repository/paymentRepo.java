package com.BackItUp.orbital.repository;


import com.BackItUp.orbital.model.Payment;
import java.util.List;
import com.BackItUp.orbital.model.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface paymentRepo extends JpaRepository<Payment, Integer> {
    List<Payment> findByWalletToOrWalletFrom(Wallet walletTo, Wallet walletFrom);

}
