import {Component, OnInit} from '@angular/core';
import {ServiceDao} from "../../../dao/service/serviceDao";
import {ServicesService} from "../../../service/services/services.service";
import {Services} from "../../../model/services/services";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {

  // services = ServiceDao.services;

  id: number;
  name: string = '';
  check: boolean = true;

  serviceList: Services[] = [];

  service: Services = {};

  serviceDelete: Services = {};

  constructor(private servicesService: ServicesService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getServiceDelete(this.id);
    })
    // this.getAll();
  }

  ngOnInit(): void {
    this.getAll();
  }

  //API json-server
  getAll() {
    this.servicesService.getAll().subscribe(servicesList => {
      this.serviceList = servicesList;
      console.log(servicesList);
    })
  }


  getServiceDelete(id: number) {
    return this.servicesService.findById(id).subscribe(serviceDelete => {
      this.serviceDelete = serviceDelete;
    });
  }

  // deleteService(id: number) {
  //   return this.servicesService.findById(id).subscribe(serviceDelete => {
  //     this.serviceDelete = serviceDelete;
  //     console.log(serviceDelete);
  //   })
  // }

  delete(closeModal: HTMLButtonElement) {
    return this.servicesService.deleteService(this.serviceDelete.id).subscribe(() => {
      closeModal.click();
      this.ngOnInit();
    })
  }

  search() {
    if (this.name === '') {
      this.ngOnInit();
    } else {
      this.serviceList = this.serviceList.filter(res => {
        console.log("status: " + res.serviceName.toLocaleLowerCase().match(this.name.toLocaleLowerCase()));
        return res.serviceName.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
  }
}
