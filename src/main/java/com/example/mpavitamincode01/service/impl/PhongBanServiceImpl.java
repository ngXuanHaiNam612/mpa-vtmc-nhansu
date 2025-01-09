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
    public List<PhongBan> getPhongBanById(String maPhongBan) {
        return phongBanMapper.getPhongBanById(maPhongBan);
    }

    @Override
    public List<PhongBan> getPhongBanByName(String tenPhongBan) {
        return phongBanMapper.getPhongBanByName(tenPhongBan);
    }

    @Override
    public int savePhongBan(PhongBan newPhongBan) {
        String maPhongBan = newPhongBan.getMaPhongBan();
        if (phongBanMapper.isPhongBanExist(maPhongBan)){
            try{
                return phongBanMapper.update(newPhongBan);
            }catch (Exception e){
                e.printStackTrace();
            }
        } else {
            try{
                return phongBanMapper.insert(newPhongBan);
            }catch (Exception e){
                e.printStackTrace();
            }
        }
        return 0;
    }

    @Override
    public int deletePhongBan(String maPhongBan) {
        if (phongBanMapper.isPhongBanExist(maPhongBan)){
            try{
               return phongBanMapper.delete(maPhongBan);
            }catch (Exception e){
                e.printStackTrace();
            }
        }
        return 0;
    }
}
