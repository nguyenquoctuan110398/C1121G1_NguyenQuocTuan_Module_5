import { Component, OnInit } from '@angular/core';
import {ServiceDao} from "../../dao/service/serviceDao";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services = ServiceDao.services;

  constructor() { }

  ngOnInit(): void {
  }

}
