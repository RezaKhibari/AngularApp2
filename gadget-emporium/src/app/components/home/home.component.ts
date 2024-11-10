import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredProducts: Product[] = []; // Initialize as an empty array

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getFeaturedProducts();
  }

  getFeaturedProducts(): void {
    this.featuredProducts = this.productService.getProducts().slice(0, 3); // Assuming the first 3 products are featured
  }
}
