import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  products: Product [] = [];

  productEdit: Product;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {
    // activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
    //   const id = paramMap.get('id');
    //
    //   if (id != null) {
    //     const temp = this.productService.findById();
    //   }
    // })
  }

  ngOnInit(): void {
  }

}
