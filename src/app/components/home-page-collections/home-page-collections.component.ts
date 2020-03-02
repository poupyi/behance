import { Component, OnInit } from '@angular/core';

import { ProductCard } from '../../models/product-card';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home-page-collections',
  templateUrl: './home-page-collections.component.html',
  styleUrls: ['./home-page-collections.component.sass']
})
export class HomePageCollectionsComponent implements OnInit {

  items: ProductCard[];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getPopularProducts().subscribe(products => {
        this.items = products.slice(0, 2);
    });
  }

}