import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../../service/customer/customer.service";
import {CustomerTypeService} from "../../../service/customer/customer-type.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Customer} from "../../../model/customer/customer";
import {CustomerType} from "../../../model/customer/customer-type";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  editCustomerForm: FormGroup;
  customerId: number;
  customer: Customer;
  customerTypes: CustomerType[];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.customerId = +paramMap.get('customerId');
      this.getCustomer(this.customerId);
    })

    this.editCustomerForm = new FormGroup({
      customerId: new FormControl(''),
      customerCode: new FormControl('KH-1111', [Validators.required,
        Validators.pattern('^(KH)-\\d{4}$')]),
      customerName: new FormControl('', [Validators.required]),
      customerBirthday: new FormControl('', [Validators.required]),
      customerGender: new FormControl('', [Validators.required]),
      customerIdCard: new FormControl('', [Validators.required,
        Validators.pattern('^\\d{9}|\\d{12}')]),
      customerPhone: new FormControl('', [Validators.required,
        Validators.pattern('^((090)|(091)|(\\((84)\\)\\+((90)|(91))))\\d{7}$')]),
      customerEmail: new FormControl('', [Validators.required,
        Validators.email]),
      customerAddress: new FormControl('', [Validators.required]),
      deleteFlag: new FormControl(''),
      customerType: new FormControl('', [Validators.required])
    })
  }

  compareFn(t1: CustomerType, t2: CustomerType): boolean {
    return t1 && t2 ? t1.customerTypeId === t2.customerTypeId : t1 === t2;
  }

  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe(customerTypes => {
      this.customerTypes = customerTypes;
    })
  }

  onSubmit() {
    console.log(this.editCustomerForm)
  }


// API
  getCustomer(customerId: number) {
    return this.customerService.findById(customerId).subscribe(customer => {
      console.log(customer);
      this.customer = customer;
      this.editCustomerForm.patchValue(this.customer);
    })
  }

  updateCustomer() {
    console.log(this.editCustomerForm);
    const customer = this.editCustomerForm.value;
    this.customerService.updateCustomer(customer).subscribe(() => {
      alert('Edit success');
      this.router.navigateByUrl('/customers/list');
    }, error => {
      console.log(error);
    })
  }
}
