package com.example.mpavitamincode01.service;


import com.example.mpavitamincode01.entity.PhongBan;

import java.util.List;

public interface PhongBanService {
    List<PhongBan> getAllPhongBan();
    void savePhongBan(PhongBan newPhongBan);
}
