import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = '/assets/data.json';

  constructor(private http: HttpClient) {} 

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

}

export interface Product {
  id: number;
  Name: string;
  Image: string;
  Weight: string;
  Price: number;
}
