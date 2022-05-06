import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  result: number;

  constructor() {
  }

  ngOnInit() {
  }

  addition(number1: string, number2: string) {
    // tslint:disable-next-line:radix
    this.result = parseInt(number1) + parseInt(number2);
  }

  subtraction(number1: string, number2: string) {
    // @ts-ignore
    this.result = number1 - number2;
  }

  multiplication(number1: string, number2: string) {
    // @ts-ignore
    this.result = number1 * number2;
  }

  division(number1: string, number2: string) {
    // @ts-ignore
    this.result = number1 / number2;
  }

}

