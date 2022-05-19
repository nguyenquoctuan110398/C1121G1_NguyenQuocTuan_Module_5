import { Injectable } from '@angular/core';
import {Customer} from "../../model/customer/customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers: Customer [] = [
    {
      customerId: 1,
      customerCode: "KH-1111",
      customerName: "Nguyễn Thị Hào",
      customerBirthday: "1970-11-07",
      customerGender: 0,
      customerIdCard: "111111111",
      customerPhone: "0914545999",
      customerEmail: "thihao07@gmail.com",
      customerAddress: "23 Nguyễn Hoàng, Đà Nẵng",
      deleteFlag: true,
      // customerTypeName: "Diamond"
      customerType:
        {
          customerTypeId: 1,
          customerTypeName: "Diamond"
        }
    },

    {
      customerId: 2,
      customerCode: "KH-1112",
      customerName: "Phạm Xuân Diệu",
      customerBirthday: "1992-08-08",
      customerGender: 1,
      customerIdCard: "865342123",
      customerPhone: "0914678909",
      customerEmail: "xuandieu92@gmail.com",
      customerAddress: "K77/22 Thái Phiên, Quảng Trị",
      deleteFlag: true,
      // customerTypeName: "Member"
      customerType: {
        customerTypeId: 5,
        customerTypeName: "Member"
      }
    },

    {
      customerId: 3,
      customerCode: "KH-1113",
      customerName: "Trương Đình Nghệ",
      customerBirthday: "1990-02-27",
      customerGender: 1,
      customerIdCard: "488645199",
      customerPhone: "0901234561",
      customerEmail: "nghenhan2702@gmail.com",
      customerAddress: "K323/12 Ông Ích Khiêm, Vinh",
      deleteFlag: true,
      // customerTypeName: "Diamond"
      customerType: {
        customerTypeId: 1,
        customerTypeName: "Diamond"
      }
    }
  ]

  constructor(private http: HttpClient) { }

  addCustomer(customer) {
    customer.customerId = this.customers.length + 1;
    // console.log("id" + customer.customerId);
    this.customers.push(customer);
    // console.log(this.customers);
  }

  // findById(id: number) {
  //   return this.customers.find(customer => customer.customerId == id);
  // }

  // deleteCustomer(id: number) {
  //   // this.customers = this.customers.filter(customer => {
  //   //   return customer.customerId !== id;
  //   // })
  //   for (let i = 0; i < this.customers.length; i++){
  //     if (this.customers[i].customerId == id) {
  //       this.customers.splice(i,1);
  //     }
  //   }
  // }


  //Api webservice
  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL + '/api/customers/list');
  }

  saveCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>(API_URL + '/api/customers/save', customer);
  }

  findById(customerId: number): Observable<Customer> {
    return this.http.get<Customer>(API_URL + '/api/customers/edit/' + customerId);
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.patch<Customer>(API_URL + '/api/customers/update', customer);
  }

  deleteCustomer(customerId: number, customer: Customer): Observable<Customer> {
    return this.http.patch<Customer>(API_URL + '/api/customers/delete/' + customerId, customer);
  }
}
