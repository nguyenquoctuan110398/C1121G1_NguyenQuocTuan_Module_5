import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  editCustomerForm: FormGroup;

  constructor() {
    this.editCustomerForm = new FormGroup({
      customerId: new FormControl('1'),
      customerCode: new FormControl('KH-1111', [Validators.required,
        Validators.pattern('^(KH)-\\d{4}$')]),
      customerName: new FormControl('Nguyễn Thị Hào', [Validators.required,
        Validators.pattern("^[\\p{Lu}\\p{Ll}]+( [\\p{Lu}\\p{Ll}]+)*$")]),
      customerBirthday: new FormControl('1970-11-07', [Validators.required]),
      customerGender: new FormControl('Nữ', [Validators.required]),
      customerIdCard: new FormControl('111111111', [Validators.required,
        Validators.pattern('^\\d{9}|\\d{12}')]),
      customerPhone: new FormControl('0914545999', [Validators.required,
        Validators.pattern('^((090)|(091)|(\\((84)\\)\\+((90)|(91))))\\d{7}$')]),
      customerEmail: new FormControl('thihao07@gmail.com', [Validators.required,
        Validators.email]),
      customerAddress: new FormControl('23 Nguyễn Hoàng, Đà Nẵng', [Validators.required]),
      deleteFlag: new FormControl('1'),
      customerTypeName: new FormControl('Platinium', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.editCustomerForm)
  }

}
