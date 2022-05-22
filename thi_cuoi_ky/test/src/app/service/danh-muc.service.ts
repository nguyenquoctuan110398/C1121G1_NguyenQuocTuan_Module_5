import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DanhMuc} from '../model/danh-muc';
import {BaiDang} from '../model/bai-dang';

@Injectable({
  providedIn: 'root'
})
export class DanhMucService {

  constructor(private httpClient: HttpClient) { }


  getAll(): Observable<DanhMuc[]> {
    return this.httpClient.get<DanhMuc[]>('http://localhost:8080/api/bai-dang/danh-muc');
  }
}
