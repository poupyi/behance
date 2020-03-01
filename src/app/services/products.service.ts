import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductCard } from '../models/product-card';
import { Observable }  from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = 'http://localhost:8080';
  private productPath = '/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductCard[]>{
    return this.http.get<ProductCard[]>(this.url + this.productPath);
  }
}
