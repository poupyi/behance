import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { homeFurnishingsItems } from '../home-page-shop/home-page-shop.component';
import { CarouselItem } from '../../models/carousel-item';

@Component({
  selector: 'app-home-page-collections',
  templateUrl: './home-page-collections.component.html',
  styleUrls: ['./home-page-collections.component.sass']
})
export class HomePageCollectionsComponent implements OnInit {

  items: CarouselItem[];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
        this.items = homeFurnishingsItems;
  }

}