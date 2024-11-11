import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredProducts = [
    { id: 1, name: 'Smartphone XYZ', price: 699, imageUrl: 'assets/product1.jpg' },
    { id: 2, name: 'Wireless Earbuds', price: 129, imageUrl: 'assets/product2.jpg' },
    { id: 3, name: 'Smartwatch', price: 249, imageUrl: 'assets/product3.jpg' }
  ];

  categories = ['Phones', 'Laptops', 'Accessories', 'Wearables'];

  constructor() { }

  ngOnInit(): void { }

  selectCategory(category: string) {
    console.log(`Category selected: ${category}`);
  }
}
