import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Services} from "../../model/services/services";

const JSON_SERVER_API_URL = `${environment.jsonServerApiUrl}`

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Services[]> {
    return this.httpClient.get<Services[]>(JSON_SERVER_API_URL + '/services');
  }

  saveServices(service): Observable<Services> {
    return this.httpClient.post<Services>(JSON_SERVER_API_URL + '/services', service);
  }

  findById(id: number): Observable<Services> {
    return this.httpClient.get<Services>(JSON_SERVER_API_URL + '/services/' + id);
  }

  updateServices(id: number, service: Services) : Observable<Services> {
    return this.httpClient.patch<Services>(JSON_SERVER_API_URL + '/services/' + id, service);
  }

  deleteService(id: number): Observable<Services> {
    return this.httpClient.delete<Services>(JSON_SERVER_API_URL + '/services/' + id);
  }
}
