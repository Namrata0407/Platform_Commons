import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
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

  removeItem(product: any): void {
    const filteredItem = this.productsInCart.filter((el, i) => el.product !== product.id);
    this.productsInCart = filteredItem;
    localStorage.setItem("cart", JSON.stringify(filteredItem))
    //  'Item removed from the cart';
  }

  placeOrder(){
    window.open("/order","_self")
  }
}
