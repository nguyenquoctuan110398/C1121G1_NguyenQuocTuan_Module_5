package com.example.testbackend.restcontroller;

import com.example.testbackend.dto.BaiDangDto;
import com.example.testbackend.dto.DanhMucDto;
import com.example.testbackend.model.BaiDang;
import com.example.testbackend.model.DanhMuc;
import com.example.testbackend.service.IBaiDangService;
import com.example.testbackend.service.IDanhMucService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/api/bai-dang")
@CrossOrigin
public class BaiDangRestController {

    @Autowired
    private IBaiDangService iBaiDangService;

    @Autowired
    private IDanhMucService iDanhMucService;

    @GetMapping(value = "/danh-sach")
    public ResponseEntity<List<BaiDang>> danhSachBaiDang(
            @PageableDefault Pageable pageable,
            @RequestParam(name = "gia", defaultValue = "") double giaTimKiem,
            @RequestParam(name = "dienTich", defaultValue = "") double dienTichTimKiem,
            @RequestParam(name = "huong", defaultValue = "") String huongTimKiem) {

//        Sort sort = Sort.by("ngayDang").descending();
//
//        if (sapXep.equals("DESC")) {
//            sort = Sort.by("gia").descending();
//        } else if(sapXep.equals("ASC")) {
//            sort = Sort.by("gia").ascending();
//        }

        Page<BaiDang> baiDangPage = iBaiDangService.findAll(pageable, dienTichTimKiem, giaTimKiem, huongTimKiem);

        if (baiDangPage.isEmpty()) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
        List<BaiDang> baiDangs = baiDangPage.toList();
        return new ResponseEntity<>(baiDangs, HttpStatus.OK);
    }

    @GetMapping(value = "/danh-muc")
    public ResponseEntity<List<DanhMuc>> danhSachDanhMuc(@PageableDefault(value = 15) Pageable pageable) {
        Page<DanhMuc> danhMucPage = iDanhMucService.findAll(pageable);

        if (danhMucPage.isEmpty()) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }

        List<DanhMuc> danhMucs = danhMucPage.toList();
        return new ResponseEntity<>(danhMucs, HttpStatus.OK);

    }

    @PostMapping(value = "/them-moi")
    public ResponseEntity<Map<String, String>> themBaiDang(
            @Valid @RequestBody BaiDangDto baiDangDto,
            BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            Map<String, String> errorMap = bindingResult.getFieldErrors()
                    .stream().collect(Collectors.toMap(
                            e -> e.getField(), e -> e.getDefaultMessage()));
            return new ResponseEntity<>(errorMap, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        BaiDang baiDang = new BaiDang();
        DanhMuc danhMuc = new DanhMuc();

        baiDangDto.setDeleteFlag(true);

        BeanUtils.copyProperties(baiDangDto, baiDang);
        BeanUtils.copyProperties(baiDangDto.getDanhMucDto(), danhMuc);

        baiDang.setDanhMuc(danhMuc);
//        baiDang.setDeleteFlag(true);
        iBaiDangService.save(baiDang);
        return new ResponseEntity<>(HttpStatus.OK);
    }

//    @PostMapping(value = "/them-moi")
//    public ResponseEntity<Map<String, String>> saveCustomer(@Valid @RequestBody BaiDangDto baiDangDto,
//                                                            BindingResult bindingResult) {
////        customerDTO.validate(customerDTO, bindingResult);
//        if (bindingResult.hasErrors()) {
//            Map<String, String> errorMap = bindingResult.getFieldErrors()
//                    .stream().collect(Collectors.toMap(
//                            e -> e.getField(), e -> e.getDefaultMessage()));
//            return new ResponseEntity<>(errorMap, HttpStatus.OK);
//        }
//        BaiDang baiDang = new BaiDang();
//        DanhMuc danhMuc = new DanhMuc();
//        baiDangDto.setDeleteFlag(true);
//
//        BeanUtils.copyProperties(baiDangDto, baiDang);
//        BeanUtils.copyProperties(baiDangDto.getDanhMucDto(), danhMuc);
//        baiDang.setDanhMuc(danhMuc);
//        iBaiDangService.save(baiDang);
//        return new ResponseEntity<>(HttpStatus.OK);
//    }


    @GetMapping(value = "/sua/{id}")
    public ResponseEntity<BaiDangDto> suaBaiDang(@PathVariable Integer id) {
        BaiDang baiDang = iBaiDangService.findById(id);

        if (baiDang == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        BaiDangDto baiDangDto = new BaiDangDto();
        DanhMucDto danhMucDto = new DanhMucDto();
        BeanUtils.copyProperties(baiDang, baiDangDto);
        BeanUtils.copyProperties(baiDang.getDanhMuc(), danhMucDto);

        baiDangDto.setDanhMucDto(danhMucDto);

        return new ResponseEntity<>(baiDangDto, HttpStatus.OK);
    }

    @PatchMapping(value = "/cap-nhat/{id}")
    public ResponseEntity<Map<String, String>> capNhatBaiDang(
            @PathVariable("id") Integer id,
            @Valid @RequestBody BaiDangDto baiDangDto,
            BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            Map<String, String> errorMap = bindingResult.getFieldErrors()
                    .stream().collect(Collectors.toMap(
                            e -> e.getField(), e -> e.getDefaultMessage()));
            return new ResponseEntity<>(errorMap, HttpStatus.OK);
        }

        BaiDang baiDang = new BaiDang();
        DanhMuc danhMuc = new DanhMuc();

        BeanUtils.copyProperties(baiDangDto, baiDang);
        BeanUtils.copyProperties(baiDangDto.getDanhMucDto(), danhMuc);

        baiDang.setId(id);
        baiDang.setDanhMuc(danhMuc);

        iBaiDangService.save(baiDang);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping(value = "/xoa")
    public ResponseEntity<Void> xoaBaiDang(@RequestBody BaiDang baiDang) {


        if (baiDang != null) {
            baiDang.setDeleteFlag(false);
            iBaiDangService.save(baiDang);

            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }


}
