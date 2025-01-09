package com.example.mpavitamincode01.service;


import com.example.mpavitamincode01.entity.PhongBan;

import java.util.List;

public interface PhongBanService {
    List<PhongBan> getAllPhongBan();
    List<PhongBan> getPhongBanById(String maPhongBan);
    List<PhongBan> getPhongBanByName(String tenPhongBan);

    int savePhongBan(PhongBan newPhongBan);
    int deletePhongBan(String maPhongBan);
}
