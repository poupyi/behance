import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-shop',
  templateUrl: './home-page-shop.component.html',
  styleUrls: ['./home-page-shop.component.sass']
})
export class HomePageShopComponent implements OnInit {
  categories: string[];
  selectedCategory: string;

  constructor() { }

  ngOnInit(): void {
    this.categories = [
      "Home Furnishings",
      "Accessories",
      "Sports",
      "Clothing Wear"
    ];
    this.selectedCategory = this.categories[0];
  }

  handleCategoryClick(category: string) {
    this.selectedCategory = category;
  }

  getCategorySelectedClass(category: string) {
    return {
      "home-page-shop-category-selected": this.selectedCategory === category
    };
  }
}
