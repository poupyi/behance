import { Component, OnInit } from '@angular/core';
import { ProductCard } from '../../models/product-card';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home-page-popular',
  templateUrl: './home-page-popular.component.html',
  styleUrls: ['./home-page-popular.component.sass']
})
export class HomePagePopularComponent implements OnInit {

  items: ProductCard[];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getPopularProducts().subscribe(products => {
        this.items = products;
    });
  }

}
