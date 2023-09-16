import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cartData: any[] = [];
  constructor(
   
    private http: HttpClient
  ) {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      this.cartData = JSON.parse(cartData);
    }
  }

  dataPresent(){
    if(this.cartData.length > 0){
      return true;
    }else{
      return false;
    }
  }
  
  deleteData(product: any): void {
    const filteredItem = this.cartData.filter((el, i) => el.product !== product.id);
    this.cartData = filteredItem;
    localStorage.setItem("cart", JSON.stringify(filteredItem))
    alert('Product removed successfully ⚠️');

}

  placeOrder(){
    window.open("/order","_self")
  }
}
