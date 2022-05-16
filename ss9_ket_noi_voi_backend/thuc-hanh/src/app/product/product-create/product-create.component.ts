import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Category} from '../../models/category';
import {CategoryService} from '../../service/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  categories: Category[] = [];

  createProductForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    category: new FormControl()
  });

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) {
    this.categoryService.findAll().subscribe(categories => {
      this.categories = categories;
      this.createProductForm.controls.category.setValue(this.categories[0]);
    });
  }

  // compareFn(t1: Category, t2: Category): boolean {
  //   return t1 && t2 ? t1.id === t2.id : t1 === t2;
  // }

  ngOnInit(): void {

  }

  submit(){
    const product = this.createProductForm.value;
    this.productService.saveProduct(product).subscribe(() => {
      this.createProductForm.reset();
      alert('Add product succcess');
      this.router.navigateByUrl('/products/list');
    }, error => {
      console.log(error);
    });
  }



}
