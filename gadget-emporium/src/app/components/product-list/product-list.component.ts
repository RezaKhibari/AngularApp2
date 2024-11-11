// product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.categories = Array.from(new Set(this.products.map(product => product.category))); // Unique categories
    this.categories.unshift('All'); // Add 'All' option
    this.filterProducts();
  }

  filterProducts(): void {
    this.filteredProducts = this.selectedCategory === 'All'
      ? this.products
      : this.products.filter(product => product.category === this.selectedCategory);
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.filterProducts();
  }
}
