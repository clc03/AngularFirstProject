import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  category: any;
  constructor(private http:HttpClient) { }

  getProducts() {

    return this.http.get('https://fakestoreapi.com/products')
  }

  getCategories() {
    return this.http.get('https://fakestoreapi.com/products/categories')
  }
  getProductByCategories(category:any) {
    return this.http.get(`https://fakestoreapi.com/products/category/${category}`);
  }
}
