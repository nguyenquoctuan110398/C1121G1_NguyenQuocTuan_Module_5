import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BaiDang} from '../model/bai-dang';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaiDangService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<BaiDang[]> {
    return this.httpClient.get<BaiDang[]>('http://localhost:3000/bai-viet');
  }

  // save(baiDang): Observable<BaiDang> {
  //   return this.httpClient.post<BaiDang>('http://localhost:3000/bai-viet', baiDang);
  // }

  save(baiDang): Observable<BaiDang> {
    return this.httpClient.post<BaiDang>('http://localhost:8080/api/bai-dang/them-moi', baiDang);
  }

  getAllSearch(dienTichSearchValue, giaSearchValue): Observable<BaiDang[]> {
    return this.httpClient.get<BaiDang[]>('http://localhost:3000/bai-viet?dienTich_like=' + dienTichSearchValue
      + '&gia_like=' + giaSearchValue);

  }


  getAllApi(dienTichTimKiem, giaTimKiem, huongTimKiem): Observable<BaiDang[]> {
    return this.httpClient.get<BaiDang[]>('http://localhost:8080/api/bai-dang/danh-sach?dienTich=' + dienTichTimKiem +
      '&gia=' + giaTimKiem + '&huong=' + huongTimKiem);
  }

  findById(id: number): Observable<BaiDang> {
    return this.httpClient.get<BaiDang>('http://localhost:8080/api/bai-dang/sua/' + id);
  }

  deleteBaiDang(baiDang: BaiDang) {
    return this.httpClient.patch<BaiDang>('http://localhost:8080/api/bai-dang/xoa', baiDang);
  }

  updateBaiDang(id: number, baiDang: BaiDang) {
    return this.httpClient.patch<BaiDang>('http://localhost:8080/api/bai-dang/cap-nhat/' + id, baiDang);
  }
}
