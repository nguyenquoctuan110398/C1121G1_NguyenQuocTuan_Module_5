import {Component, OnInit} from '@angular/core';
import {BaiDangService} from '../service/bai-dang.service';
import {DanhMucService} from '../service/danh-muc.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {BaiDang} from '../model/bai-dang';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DanhMuc} from '../model/danh-muc';

@Component({
  selector: 'app-sua-bai-dang',
  templateUrl: './sua-bai-dang.component.html',
  styleUrls: ['./sua-bai-dang.component.css']
})
export class SuaBaiDangComponent implements OnInit {

  id: number;
  baiDangSua: BaiDang;
  danhMucs: DanhMuc[];

  suaBaiDang: FormGroup;


  compareFn(t1: DanhMuc, t2: DanhMuc): boolean {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
  }


  constructor(private baiDangService: BaiDangService,
              private danhMucService: DanhMucService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.baiDangCanSua(this.id);

    });

    this.suaBaiDang = new FormGroup({
      danhMucDto: new FormControl(),
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
      trangThai: new FormControl(''),
      deleteFlag: new FormControl(''),
    });

  }

  ngOnInit(): void {
    this.danhMucService.getAll().subscribe(danhMucs => {
      this.danhMucs = danhMucs;
      console.log(danhMucs);
    });
  }

  baiDangCanSua(id: number) {
    this.baiDangService.findById(id).subscribe(baiDangSua => {
      this.baiDangSua = baiDangSua;
      console.log(this.baiDangSua);
      this.suaBaiDang.patchValue(this.baiDangSua);
    });
  }


  capNhatBaiDang(successBtn: HTMLButtonElement) {
    console.log(this.suaBaiDang);
    const baiDang = this.suaBaiDang.value;
    console.log('id: ' + this.id);

    this.baiDangService.updateBaiDang(this.id, baiDang).subscribe(() => {
      console.log('edit success');
      successBtn.click();
      // this.router.navigate(['/services/list'])

    }, error => {
      console.log(error);
    });
  }
}
