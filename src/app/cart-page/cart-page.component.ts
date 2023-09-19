import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cartData: any[] = [];
  totalPrice: Number = 0;
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
  
  totalPriceOFData(){
    let newdata: any = 0;
    if(this.cartData.length > 0){
      for(let i=0; i<this.cartData.length; i++){
        newdata += this.cartData[i].Price*this.cartData[i].quantity;
      }
      this.totalPrice = (newdata).toFixed(2);
    }
    return this.totalPrice;
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
