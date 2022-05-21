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



  baiDangSearchs: BaiDang[];
  dienTichSearchValue = '';
  giaSearchValue = '';

  constructor(private baiDangService: BaiDangService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.baiDangService.getAll().subscribe(baiDangs => {
      this.baiDangs = baiDangs;
      console.log(baiDangs);
    });
  }


  // Search

  getAllSearch(dienTichSearchValue, giaSearchValue) {
    this.baiDangService.getAllSearch(dienTichSearchValue, giaSearchValue).subscribe(baiDangSearchs => {
      this.baiDangs = baiDangSearchs;

      console.log(baiDangSearchs);
    });
  }

  searchJson() {
    this.getAllSearch(this.dienTichSearchValue, this.giaSearchValue);
    // console.log("CheckSearch: " + this.checkSearch)
  }
}
