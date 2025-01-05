package com.example.mpavitamincode01.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class UserController {
    @GetMapping("/hello")
    public String getViewHello(){
        return "view-user/hello-user";
    };

    @GetMapping("/user-info")
    public String getViewUserInfo(){
      return "view-user/user-info";
    };

}
