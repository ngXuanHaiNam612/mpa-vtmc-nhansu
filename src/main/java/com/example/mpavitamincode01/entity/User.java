package com.example.mpavitamincode01.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private int maNhanVien;
    private String tenNhanVien;
    private int tuoi;
    private String queQuan;
    private String maPhongBan;
}
