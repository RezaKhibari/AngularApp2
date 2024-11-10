import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

import { FormsModule } from '@angular/forms'; // Ensure FormsModule is imported


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    CartComponent,
    OrderSummaryComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
