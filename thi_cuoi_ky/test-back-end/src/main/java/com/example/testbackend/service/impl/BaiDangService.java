package com.example.testbackend.service.impl;

import com.example.testbackend.model.BaiDang;
import com.example.testbackend.repository.IBaiDangRepository;
import com.example.testbackend.service.IBaiDangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class BaiDangService implements IBaiDangService {

    @Autowired
    private IBaiDangRepository iBaiDangRepository;

    @Override
    public Page<BaiDang> findAll( Pageable pageable,
            double dienTichTimKiem,
            double giaTimKiem, String huongTimKiem) {
//        return iBaiDangRepository.findAll(pageable);
        return iBaiDangRepository.findAllSearch(pageable,dienTichTimKiem, giaTimKiem, huongTimKiem);
    }

    @Override
    public void save(BaiDang baiDang) {
        iBaiDangRepository.save(baiDang);
    }

    @Override
    public BaiDang findById(Integer id) {
        return iBaiDangRepository.findById(id).orElse(null);
    }
}
