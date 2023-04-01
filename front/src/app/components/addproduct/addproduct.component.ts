import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { ProductApi } from 'src/app/model/product-api';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  newProduct = new ProductApi();
  errorMessage="";
  addFailed:boolean = false;
  newIdCat! : number;
  categories!: Category[];
  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.addFailed = false;
    this.ProductService.getAllcat().subscribe(categories => {
      this.categories = categories;
    });
  }

  addEmp() {
    this.newProduct.category = "/api/categories/" + this.newIdCat
    this.ProductService.addproduct(this.newProduct)
      .subscribe(
        res => {
          console.log(res),
            this.addFailed = false;
          
          console.log(this.addFailed)
        },
        err => {
          console.log("error")
          this.errorMessage = err.message;
          this.addFailed = true;
          console.log(err),
            console.log(this.addFailed)
        }
      );
  }

}
