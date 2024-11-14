// src/app/components/cart/cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [];
  total = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
 //   this.cartItems = this.cartService.getItems();
    this.updateTotal();
  }

  removeItem(itemId: number) {
    this.cartService.removeFromCart(itemId);
  //  this.cartItems = this.cartService.getItems();
    this.updateTotal();
  }

  updateTotal() {
    this.total = this.cartService.getTotalPrice();
  }
}
