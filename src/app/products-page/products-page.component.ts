import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  jsonData: any; 
  newData: Product[] = []; 
 cartProducts : any[] = [];
 cartData: any[] = [];
  constructor(
    
    private http: HttpClient
  ) {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      this.cartData = JSON.parse(cartData);
    }
  }
  ngOnInit(): void {
    this.http.get('/assets/data.json').subscribe(data => {
      this.jsonData = data;
      this.newData = this.jsonData.product_Data.map((product: any) => ({
        ...product,
        quantity: 0
      }));
    });
  }

 

decreaseItems(product: any): void {
  const cartItem = this.cartData.find((item) => item.product === product.id);
  if (cartItem && cartItem.quantity > 0) {
    if (cartItem.quantity === 1) {
      cartItem.quantity--;
      product.quantity = cartItem.quantity;
      const filteredItem = this.cartData.filter((el, i) => el.product !== product.id);
      this.cartData = filteredItem;
      localStorage.setItem("cart", JSON.stringify(filteredItem))
    } else {
      cartItem.quantity--;
      product.quantity = cartItem.quantity;
      localStorage.setItem("cart", JSON.stringify(this.cartData))
    }
  }
}

increaseItems(product: any): void {
    const cartItem = this.cartData.find((item) => item.product === product.id);
    if (cartItem) {
      cartItem.quantity++
      product.quantity = cartItem.quantity;
      localStorage.setItem("cart", JSON.stringify(this.cartData));
    } else {
      this.cartData.push({ ...product, product: product.id, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(this.cartData));
    }

  }

  addToCart(product: any): void {
    const cartItem = this.cartData.find((item) => item.product === product.id);
    if (cartItem) {
      console.log(cartItem,);
      cartItem.quantity++;
      localStorage.setItem("cart",JSON.stringify(this.cartData))
    } else {
      console.log(product);
      this.cartData.push({...product, product: product.id, quantity: 1 });
      localStorage.setItem("cart",JSON.stringify(this.cartData))
    }
  }


  itemPresent(product: any): any {
    const cartItem = this.cartData.find((item) => item.product === product.id);
    if(cartItem){
      return true;
    }else{
      return false;
    }
  }
}

interface Product {
  id: number;
  Name: string;
  Image: string;
  Weight: string;
  Price: number;
  quantity: number;
}
