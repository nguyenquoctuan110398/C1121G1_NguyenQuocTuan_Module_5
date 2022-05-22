import {Component, OnInit} from '@angular/core';
import {BaiDang} from '../model/bai-dang';
import {BaiDangService} from '../service/bai-dang.service';

@Component({
  selector: 'app-danh-sach-bai-dang',
  templateUrl: './danh-sach-bai-dang.component.html',
  styleUrls: ['./danh-sach-bai-dang.component.css']
})
export class DanhSachBaiDangComponent implements OnInit {
  p = 1;


  baiDangs: BaiDang[] = [];

  baiDangXoa: BaiDang = {};



  // baiDangSearchs: BaiDang[];
  // dienTichSearchValue = '';
  // giaSearchValue = '';

  dienTichTimKiem = 0;
  giaTimKiem = 0;
  huongTimKiem = '';


  constructor(private baiDangService: BaiDangService) {
  }

  ngOnInit(): void {
    // this.getAll();
    this.getAllApi(this.dienTichTimKiem, this.giaTimKiem, this.huongTimKiem);
  }

  // getAll() {
  //   this.baiDangService.getAll().subscribe(baiDangs => {
  //     this.baiDangs = baiDangs;
  //     console.log(baiDangs);
  //   });
  // }

  getAllApi(dienTichTimKiem, giaTimKiem, huongTimKiem) {
    this.baiDangService.getAllApi(dienTichTimKiem, giaTimKiem, huongTimKiem).subscribe(baiDangs => {
      this.baiDangs = baiDangs;
      console.log(baiDangs);
    });
  }


  // Search

  // getAllSearch(dienTichSearchValue, giaSearchValue) {
  //   this.baiDangService.getAllSearch(dienTichSearchValue, giaSearchValue).subscribe(baiDangSearchs => {
  //     this.baiDangs = baiDangSearchs;
  //
  //     console.log(baiDangSearchs);
  //   });
  // }

  searchJson() {
    this.getAllApi(this.dienTichTimKiem, this.giaTimKiem, this.huongTimKiem);
    // console.log("CheckSearch: " + this.checkSearch)
  }


  baiDangCanXoa(id: number) {
    return this.baiDangService.findById(id).subscribe(baiDangXoa => {
      this.baiDangXoa = baiDangXoa;
    });
  }

  xoaBaiDang(closeModal: HTMLButtonElement, successBtn: HTMLButtonElement) {
    return this.baiDangService.deleteBaiDang(this.baiDangXoa).subscribe(() => {
      closeModal.click();
      successBtn.click();
      this.ngOnInit();
    });
  }

}
