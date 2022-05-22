package com.example.testbackend.dto;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class BaiDangDto {
    private Integer id;
//    private String danhMuc;
    private String vungMien;
    private String daiDien;
    private String loaiBaiViet;
    private String tinhTrang;
    @NotBlank
    private String diaChi;
    @NotBlank
    @Pattern(regexp = "^(([2-9]\\d{1,})|\\d{3,})$")
    private String dienTich;
    private String huong;
    @NotBlank
    private String tuaDe;
    @NotBlank
    private String noiDung;
    @NotBlank
    @Pattern(regexp = "^[1-9]\\d{8,}$")
    private String gia;
    private String ngayDang;
    private String trangThai;
    private boolean deleteFlag;

    private DanhMucDto danhMucDto;

    public BaiDangDto() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

//    public String getDanhMuc() {
//        return danhMuc;
//    }
//
//    public void setDanhMuc(String danhMuc) {
//        this.danhMuc = danhMuc;
//    }

    public String getVungMien() {
        return vungMien;
    }

    public void setVungMien(String vungMien) {
        this.vungMien = vungMien;
    }

    public String getDaiDien() {
        return daiDien;
    }

    public void setDaiDien(String daiDien) {
        this.daiDien = daiDien;
    }

    public String getLoaiBaiViet() {
        return loaiBaiViet;
    }

    public void setLoaiBaiViet(String loaiBaiViet) {
        this.loaiBaiViet = loaiBaiViet;
    }

    public String getTinhTrang() {
        return tinhTrang;
    }

    public void setTinhTrang(String tinhTrang) {
        this.tinhTrang = tinhTrang;
    }

    public String getDiaChi() {
        return diaChi;
    }

    public void setDiaChi(String diaChi) {
        this.diaChi = diaChi;
    }

    public String getDienTich() {
        return dienTich;
    }

    public void setDienTich(String dienTich) {
        this.dienTich = dienTich;
    }

    public String getHuong() {
        return huong;
    }

    public void setHuong(String huong) {
        this.huong = huong;
    }

    public String getTuaDe() {
        return tuaDe;
    }

    public void setTuaDe(String tuaDe) {
        this.tuaDe = tuaDe;
    }

    public String getNoiDung() {
        return noiDung;
    }

    public void setNoiDung(String noiDung) {
        this.noiDung = noiDung;
    }

    public String getGia() {
        return gia;
    }

    public void setGia(String gia) {
        this.gia = gia;
    }

    public String getNgayDang() {
        return ngayDang;
    }

    public void setNgayDang(String ngayDang) {
        this.ngayDang = ngayDang;
    }

    public String getTrangThai() {
        return trangThai;
    }

    public void setTrangThai(String trangThai) {
        this.trangThai = trangThai;
    }

    public DanhMucDto getDanhMucDto() {
        return danhMucDto;
    }

    public void setDanhMucDto(DanhMucDto danhMucDto) {
        this.danhMucDto = danhMucDto;
    }

    public boolean isDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(boolean deleteFlag) {
        this.deleteFlag = deleteFlag;
    }
}
