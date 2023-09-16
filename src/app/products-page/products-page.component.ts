import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  jsonData: any; // Declare a variable to store your JSON data
  products: Product[] = []; // Initialize an empty array to store products
 cartProducts : any[] = [];
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
  ngOnInit(): void {
    // Load your JSON data here and assign it to this.jsonData
    this.http.get('/assets/data.json').subscribe(data => {
      this.jsonData = data;
      // Initialize products with quantity
      this.products = this.jsonData.product_Data.map((product: any) => ({
        ...product,
        quantity: 0
      }));
    });
  }

  // addToCart(product: Product): void {
  //   const cartProduct = this.products.find(p => p.id === product.id);

  //   if (cartProduct) {
  //     cartProduct.quantity = 1; // Set quantity to 1 when adding to cart
  //   }
  // }
  // addToCart(product: any): void {
  //   const cartItem = this.cartProducts.find((item) => item.product === product.id);
  //   if (cartItem) {
  //     console.log(cartItem,);
  //     cartItem.quantity++;
  //     localStorage.setItem("cart",JSON.stringify(this.cartProducts))
  //   } else {
  //     console.log(product);
  //     this.cartProducts.push({...product, product: product.id, quantity: 1 });
  //     localStorage.setItem("cart",JSON.stringify(this.cartProducts))
  //   }
  // }

checkquantity(product: any):any{
  const cartItem = this.cartProducts.find((item) => item.product === product.id);
  if(cartItem){
    return true;
  }else{
    return false
  }
}
  decreaseQuantity(product: Product): void {
    if (product.quantity > 0) {
      product.quantity--;

      if (product.quantity === 0) {
        // Reset to "Add to Cart" button when quantity reaches 0
        product.quantity = 0;
      }
    }
  }

  increaseQuantity(product: Product): void {
    product.quantity++;
  }

  addToCart(product: any): void {
    const cartItem = this.productsInCart.find((item) => item.product === product.id);
    if (cartItem) {
      console.log(cartItem,);
      cartItem.quantity++;
      localStorage.setItem("cart",JSON.stringify(this.productsInCart))
    } else {
      console.log(product);
      this.productsInCart.push({...product, product: product.id, quantity: 1 });
      localStorage.setItem("cart",JSON.stringify(this.productsInCart))
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
