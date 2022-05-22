package com.example.testbackend.service;

import com.example.testbackend.model.BaiDang;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IBaiDangService {
    Page<BaiDang> findAll(Pageable pageable ,double dienTichTimKiem, double giaTimKiem, String huongTimKiem);

    void save(BaiDang baiDang);

    BaiDang findById(Integer id);
}
