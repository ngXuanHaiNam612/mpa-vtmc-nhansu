package com.example.mpavitamincode01.mapper;


import com.example.mpavitamincode01.entity.PhongBan;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface PhongBanMapper {
    List<PhongBan> getAllPhongBan();
    List<PhongBan> getPhongBan(@Param("maPhongBan") String maPhongBan);

    int insert(PhongBan user);
    int update(PhongBan user);
    int delete(int id);

}
