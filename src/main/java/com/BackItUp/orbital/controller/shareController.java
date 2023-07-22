package com.BackItUp.orbital.controller;

import com.BackItUp.orbital.repository.walletRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RestController
@CrossOrigin("https://backitup.mysql.database.azure.com/")
public class shareController {

    @Autowired
    private walletRepo WALLETRepository;

}
