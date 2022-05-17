import { Injectable } from '@angular/core';
import {CustomerType} from "../../model/customer/customer-type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  customerTypes: CustomerType[] = [
    {
      customerTypeId: 1,
      customerTypeName: 'Diamond'
    },
    {
      customerTypeId: 2,
      customerTypeName: 'Platinum'
    },
    {
      customerTypeId: 3,
      customerTypeName: 'Gold'
    },
    {
      customerTypeId: 4,
      customerTypeName: 'Silver'
    },
    {
      customerTypeId: 5,
      customerTypeName: 'Member'
    }
  ]

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(API_URL + '/api/customers/customerTypes');
  }


}
