package com.example.mpavitamincode01.mapper;


import com.example.mpavitamincode01.entity.PhongBan;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface PhongBanMapper {
    List<PhongBan> getAllPhongBan();
    List<PhongBan> getPhongBanById(@Param("maPhongBan") String maPhongBan);
    List<PhongBan> getPhongBanByName(@Param("tenPhongBan") String tenPhongBan);


    int insert(PhongBan user);
    int update(PhongBan user);
    int delete(@Param("maPhongBan") String maPhongBan);

    boolean isPhongBanExist(@Param("maPhongBan") String maPhongBan);

}
