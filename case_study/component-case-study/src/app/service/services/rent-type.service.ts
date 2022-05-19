import { Injectable } from '@angular/core';
import {RentType} from "../../model/services/rent-type";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

const JSON_SERVER_API_URL = `${environment.jsonServerApiUrl}`


@Injectable({
  providedIn: 'root'
})
export class RentTypeService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<RentType[]> {
    return this.httpClient.get<RentType[]>(JSON_SERVER_API_URL + '/rentType')
  }
}
