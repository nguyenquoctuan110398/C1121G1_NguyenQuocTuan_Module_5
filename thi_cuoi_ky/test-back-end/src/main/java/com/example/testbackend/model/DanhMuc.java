package com.example.testbackend.model;
import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.Set;

@Entity
@Table
public class DanhMuc {
    @Id
    private Integer id;
    private String tenDanhMuc;

    @JsonBackReference
    @OneToMany(mappedBy = "danhMuc")
    private Set<BaiDang> baiDangs;

    public DanhMuc() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTenDanhMuc() {
        return tenDanhMuc;
    }

    public void setTenDanhMuc(String tenDanhMuc) {
        this.tenDanhMuc = tenDanhMuc;
    }

    public Set<BaiDang> getBaiDangs() {
        return baiDangs;
    }

    public void setBaiDangs(Set<BaiDang> baiDangs) {
        this.baiDangs = baiDangs;
    }
}
