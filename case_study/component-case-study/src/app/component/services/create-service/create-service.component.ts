import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {

  serviceType: string;

  constructor() { }

  ngOnInit(): void {
  }

  chooseServiceType(target: any) {
    this.serviceType = target.value;
  }
}
