import { Component, OnInit } from '@angular/core';
import { ProductApi } from 'src/app/model/product-api';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products! : ProductApi[];
  constructor(private ProductService : ProductService) { }

  ngOnInit(): void {
    this.ProductService.getAll().subscribe(data => {
      this.products=data;
      console.log(this.products);
    })
  }


 /*  categories: { [url: string]: Category } = {};
  products! : ProductApi[];
  constructor(public productService : ProductService) { }

  ngOnInit(): void {
  this.productService.getAll().subscribe(products => {
    this.products = products;
    const categoryUrls = new Set<string>(products.map(p => p.category));
    const requests = Array.from(categoryUrls).map(url => this.productService.getCategory(url));
    forkJoin(requests).subscribe(categories => {
      console.log('categories', categories); // log the categories
      for (const category of categories) {
        this.categories[category.id.toString()] = category;
      }
      console.log('this.categories', this.categories); // log the updated categories object
    });
  });
} */

  

}
