package com.example.mpavitamincode01.service;

import com.example.mpavitamincode01.entity.User;

import java.util.List;

public interface UserService {
    List<User>getAllUser();
    void saveUser(User newUser);
}
