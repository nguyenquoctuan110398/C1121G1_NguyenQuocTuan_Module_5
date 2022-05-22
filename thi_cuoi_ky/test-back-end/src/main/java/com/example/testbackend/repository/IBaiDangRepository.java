package com.example.testbackend.repository;

import com.example.testbackend.model.BaiDang;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface IBaiDangRepository extends JpaRepository<BaiDang, Integer> {

    @Query(value = "select * from bai_dang " +
            "inner join danh_muc on bai_dang.danh_muc_id = danh_muc.id " +
            "where bai_dang.delete_flag = 1 and bai_dang.dien_tich >= :dienTichTimKiem " +
            "and bai_dang.gia >= :giaTimKiem and bai_dang.huong like concat('%', :huongTimKiem, '%')",
            countQuery = "select count(*) from bai_dang " +
                    "inner join danh_muc on bai_dang.danh_muc_id = danh_muc.id " +
                    "where bai_dang.delete_flag = 1 and bai_dang.dien_tich >= :dienTichTimKiem " +
                    "and bai_dang.gia >= :giaTimKiem and bai_dang.huong like concat('%', :huongTimKiem, '%')",
            nativeQuery = true)
    Page<BaiDang> findAllSearch(Pageable pageable, double dienTichTimKiem,
                                double giaTimKiem, String huongTimKiem);
}
