import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ServiceDao} from "../../../dao/service/serviceDao";
import {CustomerService} from "../../../service/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  createCustomerForm: FormGroup;

  constructor(private customerService: CustomerService, private router: Router) {
    this.createCustomerForm = new FormGroup({
      customerCode: new FormControl('', [Validators.required,
        Validators.pattern('^(KH)-\\d{4}$')]),
      customerName: new FormControl('', [Validators.required,
        Validators.pattern('^[a-zA-Z ]{2,}$')]),
      customerBirthday: new FormControl('', [Validators.required]),
      customerGender: new FormControl('', [Validators.required]),
      customerIdCard: new FormControl('', [Validators.required,
        Validators.pattern('^(\\d{9}|\\d{12})$')]),
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

  // createCustomer() {
  //   const customer = this.createCustomerForm.value;
  //   console.log(customer);
  //   this.customerService.addCustomer(customer);
  //   console.log(this.createCustomerForm);
  //   // this.createCustomerForm.reset();
  //   // this.route.navigateByUrl('customer/list');
  //   this.router.navigate(['/customer/list']);
  // }

  //Api webservice
  createCustomer(){
    const customer = this.createCustomerForm.value;
    this.customerService.saveCustomer(customer).subscribe(() => {
      this.createCustomerForm.reset();
      alert("Tạo thành công");
    }, error => {
      console.log(error);
    });
  }

}
