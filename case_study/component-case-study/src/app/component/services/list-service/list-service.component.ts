import { Component, OnInit } from '@angular/core';
import {ServiceDao} from "../../../dao/service/serviceDao";

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {

  services = ServiceDao.services;

  constructor() { }

  ngOnInit(): void {
  }

}
