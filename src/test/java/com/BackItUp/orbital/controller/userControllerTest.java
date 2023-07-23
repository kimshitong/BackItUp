package com.BackItUp.orbital.controller;

import com.BackItUp.orbital.model.User;
import com.BackItUp.orbital.repository.notificationRepo;
import com.BackItUp.orbital.repository.userRepo;
import com.BackItUp.orbital.repository.walletRepo;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.SerializationFeature;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;

import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.boot.test.mock.mockito.MockBean;

import org.springframework.beans.factory.annotation.Autowired;
import static org.junit.jupiter.api.Assertions.*;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(userController.class)
@Import(TestConfig.class) // Import the test configuration
class userControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private userRepo userRepository; // Assuming the userRepo interface is correctly named and imported.
    @MockBean
    private walletRepo WALLETRepository;
    @MockBean
    private notificationRepo notificationRepository;

    private User FounderOne;
    private User InvestorOne;
    private User CompanyOne;
    private User OAuthOne;



    @BeforeEach
    void setup(){
        this.CompanyOne= new User("CompanyA","companyA@gmail.com","8175422","password","linkedin.com",true);
        this.FounderOne = new User("Jason","jason@gmail.com","8175422","password","Founder","","linkedin.com",true);
        this.InvestorOne = new User("Nick","nick@gmail.com","8175422","password","Investor","","linkedin.com",true);
        this.OAuthOne = new User("FBKim","kim@gmail.com","8175422","password","Founder","GOOGLE","link","","linkedin.com",true);

    }
    @Test
    void newUser() throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(SerializationFeature.WRAP_ROOT_VALUE,false);
        ObjectWriter ow = mapper.writer().withDefaultPrettyPrinter();
        String requestJSON = ow.writeValueAsString(FounderOne);

        this.mockMvc.perform(post("/api/createUser")
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestJSON))
                .andDo((print())).andExpect(status().isOk());


    }

    @Test
    void createUserbyAuth() {
    }

    @Test
    void newCompany() {
    }

    @Test
    void testNewCompany() {
    }

    @Test
    void submitEvidence() {
    }

    @Test
    void submitPhoto() {
    }

    @Test
    void getUnverifiedFounders() {
    }

    @Test
    void verifyUser() {
    }

    @Test
    void verifyCompany() {
    }

    @Test
    void verifyFounder() {
    }

    @Test
    void verifyUserbyAuth() {
    }

    @Test
    void getUser() {
    }

    @Test
    void testVerifyUser() {
    }

    @Test
    void unverifyUser() {
    }

    @Test
    void getAllUsers() {
    }

    @Test
    void findExistedEmail() {
    }
}