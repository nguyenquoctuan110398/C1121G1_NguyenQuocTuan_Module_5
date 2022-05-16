import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../models/category';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  editProductForm: FormGroup;
  id: number;
  categories: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }

  compareFn(t1: Category, t2: Category): boolean {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
  }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe(categories => {
      this.categories = categories;
    });
  }

  getProduct(id: number) {
    return this.productService.findById(id).subscribe(product => {
      console.log(product);
      this.editProductForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        category: new FormControl(product.category)
      });
    });
  }

  updateProduct(id: number) {
    console.log(this.editProductForm);
    const product = this.editProductForm.value;
    this.productService.updateProduct(id, product).subscribe(() => {
      alert('Edit success');
      this.router.navigateByUrl('/products/list');
    }, error => {
      console.log(error);
    });
  }

}
