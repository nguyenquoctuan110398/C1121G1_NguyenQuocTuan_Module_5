package com.example.testbackend.service;

import com.example.testbackend.model.DanhMuc;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IDanhMucService {
    Page<DanhMuc> findAll(Pageable pageable);
}
