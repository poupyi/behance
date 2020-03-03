import { Component, OnInit } from '@angular/core';
import { CarouselItem } from '../../models/carousel-item';

export const homeFurnishingsItems: CarouselItem[] = [
  {
    edition: 'Limited',
    id: 0,
    imageUrl: 'https://www.homecrux.com/wp-content/uploads/2017/09/Best-switch-designs.jpg',
    name: 'Designer Light',
    version: '1.0'
  },
  {
    edition: 'Exclusive',
    id: 1,
    imageUrl: 'https://www.homecrux.com/wp-content/uploads/2017/09/Best-switch-designs.jpg',
    name: 'Designer Light',
    version: '2.0'
  },
  {
    edition: 'No tomorrow',
    id: 2,
    imageUrl: 'https://www.homecrux.com/wp-content/uploads/2017/09/Best-switch-designs.jpg',
    name: 'Designer Light',
    version: '3.0'
  }
];

@Component({
  selector: 'app-home-page-shop',
  templateUrl: './home-page-shop.component.html',
  styleUrls: ['./home-page-shop.component.sass']
})
export class HomePageShopComponent implements OnInit {
  categories: string[];
  selectedCategory: string;
  selectedItems: CarouselItem[];

  constructor() { }

  ngOnInit(): void {
    this.categories = [
      "Home Furnishings",
      "Accessories",
      "Sports",
      "Clothing Wear"
    ];
    this.selectedCategory = this.categories[0];
    this.selectedItems = homeFurnishingsItems;
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
