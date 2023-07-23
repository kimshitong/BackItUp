package com.BackItUp.orbital.controller;

import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.ComponentScan;

@TestConfiguration
@ComponentScan(basePackages = "com.BackItUp.orbital.repository") // Adjust the package name to match the location of userRepo
public class TestConfig {
}
