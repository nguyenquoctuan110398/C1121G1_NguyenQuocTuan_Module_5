import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoaiBaiViet} from '../model/loai-bai-viet';
import {LoaiBaiVietService} from '../service/loai-bai-viet.service';
import {BaiDangService} from '../service/bai-dang.service';
import {DanhMuc} from '../model/danh-muc';
import {DanhMucService} from '../service/danh-muc.service';

@Component({
  selector: 'app-them-bai-dang',
  templateUrl: './them-bai-dang.component.html',
  styleUrls: ['./them-bai-dang.component.css']
})
export class ThemBaiDangComponent implements OnInit {

  // loaiBaiViets: LoaiBaiViet[];

  themBaiDang: FormGroup;

  danhMucs: DanhMuc[];

  constructor(private loaiBaiVietService: LoaiBaiVietService,
              private danhMucService: DanhMucService,
              private baiDangService: BaiDangService) {
    this.themBaiDang = new FormGroup({
      danhMucDto: new FormControl(''),
      vungMien: new FormControl(''),
      daiDien: new FormControl(''),
      loaiBaiViet: new FormControl(''),
      tinhTrang: new FormControl(),
      diaChi: new FormControl('', [Validators.required]),
      dienTich: new FormControl('', [Validators.required,
        Validators.pattern('^(([2-9]\\d{1,})||\\d{3,})$')]),
      huong: new FormControl(),
      tuaDe: new FormControl('', [Validators.required]),
      noiDung: new FormControl('', [Validators.required]),
      gia: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d{8,}$')]),
      ngayDang: new FormControl(''),
      trangThai: new FormControl('')
    });
  }

  ngOnInit(): void {
    // this.getLoaiBaiViet();
    // console.log(this.loaiBaiViets);
    this.getDanhMuc();
  }


  // getLoaiBaiViet() {
  //   this.loaiBaiVietService.getAll().subscribe(loaiBaiViets => {
  //     this.loaiBaiViets = loaiBaiViets;
  //     console.log(loaiBaiViets);
  //   });
  // }

  getDanhMuc() {
    this.danhMucService.getAll().subscribe(danhMucs => {
      this.danhMucs = danhMucs;
      console.log(danhMucs);
    });
  }

  themMoi(successBtn: HTMLButtonElement) {
    console.log(this.themBaiDang);
    const baiDang = this.themBaiDang.value;
    console.log(baiDang);

    if (this.themBaiDang.valid) {
      this.baiDangService.save(baiDang).subscribe(() => {
        console.log('Create success');
        // this.router.navigate(['services/list']);
        successBtn.click();
      }, error => {
        alert('Chicken');
      });
    } else {
      alert('Không cho lưu');
    }

    // this.baiDangService.save(baiDang).subscribe(() => {
    //   console.log('Create success');
    //   // this.router.navigate(['services/list']);
    //   successBtn.click();
    // }, error => {
    //   alert('Chicken');
    // });
  }

}
