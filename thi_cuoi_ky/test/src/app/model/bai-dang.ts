import {LoaiBaiViet} from './loai-bai-viet';
import {FormControl, Validators} from '@angular/forms';
import {DanhMuc} from './danh-muc';

export interface BaiDang {
  id?: number;
  danhMuc?: DanhMuc;
  vungMien?: string;
  daiDien?: string;
  loaiBaiViet?: string;
  tinhTrang?: string;
  diaChi?: string;
  dienTich?: string;
  huong?: string;
  tuaDe?: string;
  noiDung?: string;
  gia?: string;
  ngayDang?: string;
  trangThai?: string;
  deleteFlag?: boolean;
}
