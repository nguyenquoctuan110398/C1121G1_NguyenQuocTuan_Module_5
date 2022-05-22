package com.example.testbackend.repository;

import com.example.testbackend.model.DanhMuc;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IDanhMucRepository extends JpaRepository<DanhMuc, Integer> {
}
