import { Component, OnInit } from '@angular/core';
import {ServiceDao} from "../dao/serviceDao";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services = ServiceDao.service;

  constructor() { }

  ngOnInit(): void {
  }

}
