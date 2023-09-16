import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.css']
})
export class OrdersPageComponent {
  productsInCart: any[] = [];
  // constructor(private http: HttpClient) { }
  constructor(
    // private productService: ProductService,
    // private cartService: CartService, // Inject CartService
    private http: HttpClient
  ) {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      this.productsInCart = JSON.parse(cartData);
    }
  }

  placeOrder(){
    alert("order has been placed successfully");
    window.open("/catalogue","_self")
  }
}
