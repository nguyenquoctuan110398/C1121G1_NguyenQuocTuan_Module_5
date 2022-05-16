import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Category} from '../models/category';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>('http://localhost:3000/categories');
  }
}
