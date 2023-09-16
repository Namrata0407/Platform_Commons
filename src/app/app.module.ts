import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CartPageComponent,
    ProductsPageComponent,
    OrdersPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
