import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Laptop', description: 'High-performance laptop', price: 999.99, category: 'Computers', imageUrl: '...' },
    { id: 2, name: 'Smartphone', description: 'Latest model smartphone', price: 699.99, category: 'Mobile', imageUrl: '...' },
    { id: 3, name: 'Headphones', description: 'Noise-canceling headphones', price: 199.99, category: 'Accessories', imageUrl: '...' },
    { id: 4, name: 'Tablet', description: 'Portable tablet', price: 299.99, category: 'Mobile', imageUrl: '...' },

  ];

  getProducts(): Product[] {
    return this.products;
  }
}
