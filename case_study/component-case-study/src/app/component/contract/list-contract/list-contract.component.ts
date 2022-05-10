import { Component, OnInit } from '@angular/core';
import {ContractDao} from "../../../dao/contract/contractDao";

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {

  contracts = ContractDao.contracts;

  constructor() { }

  ngOnInit(): void {
  }

}
