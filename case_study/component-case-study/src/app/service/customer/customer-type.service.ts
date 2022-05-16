import { Injectable } from '@angular/core';
import {CustomerType} from "../../model/customer/customer-type";

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

  constructor() { }
}
