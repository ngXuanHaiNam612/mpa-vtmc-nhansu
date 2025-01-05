package com.example.mpavitamincode01.mapper;


import com.example.mpavitamincode01.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface UserMapper {
    List<User> getAllUser();
    List<User> getUserByName(@Param("userName") String userName);

    int insert(User user);
    int update(User user);
    int delete(int id);

}
