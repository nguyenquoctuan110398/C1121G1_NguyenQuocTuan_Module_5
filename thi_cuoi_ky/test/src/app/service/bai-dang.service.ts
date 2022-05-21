import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {BaiDang} from '../model/bai-dang';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaiDangService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<BaiDang[]> {
    return this.httpClient.get<BaiDang[]>('http://localhost:3000/bai-viet');
  }

  save(baiDang): Observable<BaiDang> {
    return this.httpClient.post<BaiDang>('http://localhost:3000/bai-viet', baiDang);
  }

  getAllSearch(dienTichSearchValue, giaSearchValue): Observable<BaiDang[]> {
return this.httpClient.get<BaiDang[]>('http://localhost:3000/bai-viet?dienTich_like=' + dienTichSearchValue
+ '&gia_like=' + giaSearchValue);

  }
}
