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

  p = 1;

  listIdServiceDelete: number[] = [];

  serviceList: Services[] = [];

  service: Services = {};

  serviceDelete: Services = {};

  //Biến search:
  serviceNameSearchValue = '';
  // serviceAreaSearchValue = '';
  descriptionOtherConvenienceSearchValue = '';

  checkSearch: boolean = true;

  constructor(private servicesService: ServicesService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getServiceDelete(this.id);
    })
    // this.getAll();
  }

  ngOnInit(): void {
    this.getAllSearch(this.serviceNameSearchValue, this.descriptionOtherConvenienceSearchValue);
  }

  //API json-server
  // getAll() {
  //   this.servicesService.getAll().subscribe(servicesList => {
  //     this.serviceList = servicesList;
  //     console.log(servicesList);
  //   })
  // }

  getAllSearch(serviceNameSearchValue, descriptionOtherConvenienceSearchValue) {
    this.servicesService.getAllSearch(serviceNameSearchValue,
      descriptionOtherConvenienceSearchValue).subscribe(servicesList => {
      this.serviceList = servicesList;

      console.log(servicesList);
      if (this.serviceList.length == 0){
        return this.checkSearch = false;
      } else {
        return this.checkSearch = true;
      }

    })
  }

  searchJson() {
    this.getAllSearch(this.serviceNameSearchValue,
      this.descriptionOtherConvenienceSearchValue);
    console.log("CheckSearch: " + this.checkSearch)
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

  delete(closeModal: HTMLButtonElement, successBtn: HTMLButtonElement) {
    return this.servicesService.deleteService(this.serviceDelete.id).subscribe(() => {
      closeModal.click();
      successBtn.click();
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

  addIdServiceToDeleteList(id: number) {
    let flag = false;
    for (let idd of this.listIdServiceDelete) {
      if (id == idd) {
        this.listIdServiceDelete = this.listIdServiceDelete.filter(thisId => {
          flag = true;
          return thisId != id;
        })
      }
    }
    if (!flag) {
      this.listIdServiceDelete.push(id);
    }
    console.log(this.listIdServiceDelete);
  }
  countDel = 0;

  deleteMul(closeMulDelModal: HTMLButtonElement, successBtn: HTMLButtonElement) {
    for (let id of this.listIdServiceDelete) {
      this.servicesService.deleteService(id).subscribe(() => {
        this.countDel++;
      }, error => {}, () => {
        if (this.countDel == this.listIdServiceDelete.length) {
          this.ngOnInit();
          closeMulDelModal.click();
          successBtn.click();
        }
      })
    }
  }

}
