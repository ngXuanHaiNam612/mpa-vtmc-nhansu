package com.example.mpavitamincode01.service.impl;

import com.example.mpavitamincode01.entity.User;
import com.example.mpavitamincode01.mapper.UserMapper;
import com.example.mpavitamincode01.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserMapper userMapper;

    public List<User> getAllUser() {
       return userMapper.getAllUser();
    }

    @Override
    public void saveUser(User newUser) {
        try {
            userMapper.insert(newUser);
        } catch (Exception e){
            e.printStackTrace();
        }
    };

}