import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProductCard } from '../models/product-card';
import { Observable }  from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = 'http://localhost:8080';
  private productPath = '/products';

  constructor(private http: HttpClient) { }

  getPopularProducts(): Observable<ProductCard[]> {
    return this.http.get<ProductCard[]>(this.url + this.productPath + '/popular');
  }

  getProducts(): Observable<ProductCard[]> {
    return this.http.get<ProductCard[]>(this.url + this.productPath);
  }

  getProductsByFilters(filters: string[]): Observable<ProductCard[]> {
    if (filters.length > 0) {
      const params = new HttpParams().set('filters',  filters.join(','));
      return this.http.get<ProductCard[]>(this.url + this.productPath + '/filters', { params: params });
    } else {
      return this.http.get<ProductCard[]>(this.url + this.productPath + '/filters');
    }
  }
}
