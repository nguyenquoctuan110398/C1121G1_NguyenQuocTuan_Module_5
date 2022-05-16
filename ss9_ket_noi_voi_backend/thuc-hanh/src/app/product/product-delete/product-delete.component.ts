import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Category} from '../../models/category';
import {Product} from '../../models/product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  // deleteProductForm: FormGroup;

  id: number;
  product: Product;
  categories: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }

  // compareFn(t1: Category, t2: Category): boolean {
  //   return t1 && t2 ? t1.id === t2.id : t1 === t2;
  // }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe(categories => {
      this.categories = categories;
    });
  }

  getProduct(id: number) {
    this.productService.findById(id).subscribe(product => {
      this.product = product;
      console.log(product);
      // this.deleteProductForm = new FormGroup({
      //   id: new FormControl(product.id),
      //   name: new FormControl(product.name),
      //   price: new FormControl(product.price),
      //   category: new FormControl(product.category)
      // });
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.router.navigate(['/products/list']);
    }, error => {
      console.log(error);
    });

  }

}
