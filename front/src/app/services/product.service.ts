import { Category } from './../model/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

import { ProductApi } from '../model/product-api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  api: string = "http://127.0.0.1:8000/api/product_apis"
  apicat: string = "http://127.0.0.1:8000/api/categories"
  constructor(private http: HttpClient) { }

  addproduct(e: ProductApi): Observable<ProductApi> {
    return this.http.post<any>(`${this.api}`, e)
  } 
      
  


   /* getAll(): Observable<ProductApi[]> {
    const url = `${this.api}`;
    return this.http.get<any>(url)
  }   */

  getAll(): Observable<ProductApi[]> {
    return this.http.get<ProductApi[]>(`${this.api}`);
  }

  getCategory(url: string): Observable<Category> {
    const categoryId = url.substring(url.lastIndexOf('/') + 1);
    return this.http.get<Category>(`${this.apicat}/${categoryId}`);
  }

   getAllcat(): Observable<Category[]> {
    const url = `${this.apicat}`;
    return this.http.get<any>(url)
  }  

  
  

 /*  getAllcat(): Observable<Category[]> {
    const url = `${this.apicat}`;
    return this.http.get<any>(url).pipe(
      map(response => response['hydra:member'])
    );
  }  */
  /* getAll(): Observable<ProductApi[]> {
    const url = `${this.api}`;
    return this.http.get<any>(url).pipe(
      map(response => response['hydra:member'])
    );
  }  */
}
