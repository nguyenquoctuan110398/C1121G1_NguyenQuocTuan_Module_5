import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  createCustomerForm: FormGroup;

  constructor() {
    this.createCustomerForm = new FormGroup({
      customerCode: new FormControl('', [Validators.required,
        Validators.pattern('^(KH)-\\d{4}$')]),
      customerName: new FormControl('', [Validators.required,
        Validators.pattern("^[\\p{Lu}\\p{Ll}]+( [\\p{Lu}\\p{Ll}]+)*$")]),
      customerBirthday: new FormControl('', [Validators.required]),
      customerGender: new FormControl('', [Validators.required]),
      customerIdCard: new FormControl('', [Validators.required,
        Validators.pattern('^\\d{9}|\\d{12}')]),
      customerPhone: new FormControl('', [Validators.required,
        Validators.pattern('^((090)|(091)|(\\((84)\\)\\+((90)|(91))))\\d{7}$')]),
      customerEmail: new FormControl('', [Validators.required,
        Validators.email]),
      customerAddress: new FormControl('', [Validators.required]),
      customerTypeName: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.createCustomerForm);
  }

}
