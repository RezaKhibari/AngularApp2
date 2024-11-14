// product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  onCategoryChange(arg0: string) {
  throw new Error('Method not implemented.');
  }
    products: Product[] = [];
    filteredProducts: Product[] = [];
    categories: string[] = [];
    selectedCategory: string = 'All';

    constructor(private cartService: CartService) { }

    ngOnInit(): void { }

    addToCart(product: any) {
      this.cartService.addToCart(product);
      alert(`${product.name} has been added to your cart!`);
    }
}
