import { Component, OnInit } from '@angular/core';
import { CarouselItem } from '../../models/carousel-item';

const homeFurnishingsItems: CarouselItem[] = [
  {
    edition: 'Limited',
    id: 0,
    imageUrl: 'https://cdn20.pamono.com/p/g/5/3/534020_ki092tdg2q/zebrano-wood-and-goatskin-dining-table-1950s-6.jpg',
    name: 'Wooden Dining Table',
    version: '1.0'
  },
  {
    edition: 'Exclusive',
    id: 1,
    imageUrl: 'https://www.ztijl.com/wp-content/uploads/2019/12/The-Wooden-Chair-by-Marc-Newson-for-Cappellini-1990s-3.jpg',
    name: 'Wooden Design Chair',
    version: '1.0'
  },
  {
    edition: 'Limited',
    id: 2,
    imageUrl: 'https://www.homecrux.com/wp-content/uploads/2017/09/Best-switch-designs.jpg',
    name: 'Designer Light',
    version: '1.0'
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
