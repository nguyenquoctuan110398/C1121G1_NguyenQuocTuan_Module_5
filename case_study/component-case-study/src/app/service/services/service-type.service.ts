import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ServiceType} from "../../model/services/service-type";
import {environment} from "../../../environments/environment";
import {Services} from "../../model/services/services";

const JSON_SERVER_API_URL = `${environment.jsonServerApiUrl}`

@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ServiceType[]> {
    return this.httpClient.get<ServiceType[]>(JSON_SERVER_API_URL + '/serviceType')
  }

  findById(id: number): Observable<ServiceType> {
    return this.httpClient.get<ServiceType>(JSON_SERVER_API_URL + '/serviceType/' + id);
  }
}
