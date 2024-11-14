import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredProducts = [
    { id: 1, name: 'Smartphone XYZ', category: 'Phones', price: 699, imageUrl: 'assets/product1.jpg' },
    { id: 2, name: 'Wireless Earbuds', category: 'Accessories', price: 129, imageUrl: 'assets/product2.jpg' },
    { id: 3, name: 'Smartwatch', category: 'Wearables', price: 249, imageUrl: 'assets/product3.jpg' },
    { id: 4, name: 'Laptop ABC', category: 'Laptops', price: 999, imageUrl: 'assets/product4.jpg' },
    // Add more products as needed for testing
  ];

  categories = ['All', 'Phones', 'Laptops', 'Accessories', 'Wearables'];
  selectedCategory = 'All';

  // Pagination properties
  currentPage = 1;
  pageSize = 3;

  constructor() { }

  ngOnInit(): void { }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.currentPage = 1; // Reset to first page on category change
  }

  get filteredProducts() {
    if (this.selectedCategory === 'All') {
      return this.featuredProducts;
    }
    return this.featuredProducts.filter(product => product.category === this.selectedCategory);
  }

  get paginatedProducts() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredProducts.slice(start, end);
  }

  get totalPages() {
    return Math.ceil(this.filteredProducts.length / this.pageSize);
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
