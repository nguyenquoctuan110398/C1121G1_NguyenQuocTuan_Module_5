import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoaiBaiViet} from '../model/loai-bai-viet';

@Injectable({
  providedIn: 'root'
})
export class LoaiBaiVietService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<LoaiBaiViet[]> {
    return this.httpClient.get<LoaiBaiViet[]>('http://localhost:3000/loaiBaiViet');
  }
}
