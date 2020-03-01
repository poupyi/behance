import { Component, OnInit } from '@angular/core';
import { ProductCard } from '../../models/product-card';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit {
  items: ProductCard[];
  currentPage = 1;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(products => {
        this.items = products;
    });
  }
}
