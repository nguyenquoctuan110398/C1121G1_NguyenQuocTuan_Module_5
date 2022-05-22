package com.example.testbackend.service.impl;

import com.example.testbackend.model.DanhMuc;
import com.example.testbackend.repository.IDanhMucRepository;
import com.example.testbackend.service.IDanhMucService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class DanhMucService implements IDanhMucService {
    
    @Autowired
    private IDanhMucRepository iDanhMucRepository;

    @Override
    public Page<DanhMuc> findAll(Pageable pageable) {
        return iDanhMucRepository.findAll(pageable);
    }
}
