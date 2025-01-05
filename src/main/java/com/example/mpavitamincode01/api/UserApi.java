package com.example.mpavitamincode01.api;

import com.example.mpavitamincode01.entity.User;
import com.example.mpavitamincode01.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("api/v1/user")
@Slf4j
public class UserApi {

    @Autowired
    private UserService userService;

    @GetMapping("/get-all-user")
    public ResponseEntity doGetAllUser(){
        HashMap<String, Object> result = new HashMap<>();
        try{
            result.put("status", true);
            result.put("message", "Call Api Success");
            result.put("data", userService.getAllUser());
        } catch (Exception e){
            result.put("status", false);
            result.put("message", "Call Api Failure");
            result.put("data", null);
            log.error("Failure when call API {api-user/get-all-user} : ", e);
        };
        return ResponseEntity.ok(result);
    };


    @PostMapping("/save-user")
    public ResponseEntity doPostUser(@RequestBody User newUser){
        HashMap<String, Object> result = new HashMap<>();
        try{
            result.put("status", true);
            result.put("message", "Call Api Success");
            userService.saveUser(newUser);
        } catch (Exception e){
            result.put("status", false);
            result.put("message", "Call Api Failure");
            log.error("Failure when call API {api-user/insert-user} : ", e);
        };
        return ResponseEntity.ok(result);
    };
}
