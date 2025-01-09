package com.example.mpavitamincode01.api;

import com.example.mpavitamincode01.entity.PhongBan;
import com.example.mpavitamincode01.entity.User;
import com.example.mpavitamincode01.service.PhongBanService;
import com.example.mpavitamincode01.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("api/v1/phong-ban")
@Slf4j
public class PhongBanApi {

    @Autowired
    private PhongBanService phongBanService;

    @GetMapping("/get-all-phong-ban")
    public ResponseEntity doGetAllPhongBan(){
        HashMap<String, Object> result = new HashMap<>();
        try{
            result.put("status", true);
            result.put("message", "Call Api Success");
            result.put("data", phongBanService.getAllPhongBan());
        } catch (Exception e){
            result.put("status", false);
            result.put("message", "Call Api Failure");
            result.put("data", null);
            log.error("Failure when call API {api/v1/phong-ban/get-all-phong-ban} : ", e);
        };
        return ResponseEntity.ok(result);
    };

    @PostMapping("/save-phong-ban")
    public ResponseEntity doSavePhongBan(@RequestBody PhongBan phongBan){
        HashMap<String, Object> result = new HashMap<>();
        try{
            result.put("status", true);
            result.put("message", "Call Api Success");
            phongBanService.savePhongBan(phongBan);
        } catch (Exception e){
            result.put("status", false);
            result.put("message", "Call Api Failure");
            log.error("Failure when call API {api/v1/phong-ban/insert-phong-ban} : ", e);
        };
        return ResponseEntity.ok(result);
    }

    @DeleteMapping("/delete-phong-ban")
    public ResponseEntity doSavePhongBan(@RequestParam("maPhongBan") String maPhongBan){
        HashMap<String, Object> result = new HashMap<>();
        try{
            result.put("status", true);
            result.put("message", "Call Api Success");
            phongBanService.deletePhongBan(maPhongBan);
        } catch (Exception e){
            result.put("status", false);
            result.put("message", "Call Api Failure");
            log.error("Failure when call API {api/v1/phong-ban/delete-phong-ban} : ", e);
        };
        return ResponseEntity.ok(result);
    }

}
