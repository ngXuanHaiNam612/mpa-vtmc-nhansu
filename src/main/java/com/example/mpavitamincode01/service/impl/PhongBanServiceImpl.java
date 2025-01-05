package com.example.mpavitamincode01.service.impl;

import com.example.mpavitamincode01.entity.PhongBan;
import com.example.mpavitamincode01.mapper.PhongBanMapper;
import com.example.mpavitamincode01.service.PhongBanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PhongBanServiceImpl implements PhongBanService {

    @Autowired
    private PhongBanMapper phongBanMapper;

    @Override
    public List<PhongBan> getAllPhongBan() {
        return phongBanMapper.getAllPhongBan();
    }

    @Override
    public void savePhongBan(PhongBan newPhongBan) {
        try {
            phongBanMapper.insert(newPhongBan);
        } catch (Exception e){
            e.printStackTrace();
        }
    }
}
