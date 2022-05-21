import {LoaiBaiViet} from './loai-bai-viet';
import {FormControl, Validators} from '@angular/forms';

export interface BaiDang {
  id: number;
  danhMuc?: string;
  vungMien?: string;
  daiDien?: string;
  loaiBaiViet: string;
  tinhTrang?: string;
  diaChi: string;
  dienTich: string;
  huong?: string;
  tuaDe: string;
  noiDung: string;
  gia: string;
  ngayDang: string;
  trangThai: string;
}
