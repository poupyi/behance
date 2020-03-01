import { Component, OnInit } from '@angular/core';
import { ProductCard } from '../../models/product-card';
import { ProductsService } from '../../services/products.service';

const displayableItemsLength = 10;

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit {
  fullItems: ProductCard[];
  displayableItems: ProductCard[];
  currentPage = 1;
  totalPage: number;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(products => {
        this.fullItems = products;
        this.totalPage = Math.max(Math.ceil(this.fullItems.length / displayableItemsLength), 1);
        this.displayableItems = this.fullItems.slice(0, displayableItemsLength);
    });
  }

  goToPreviousPage() {
    const previousPage = this.currentPage - 1;
    if (previousPage >= 1) {
      this.displayableItems = previousPage === 1 
      ? this.fullItems.slice(0, displayableItemsLength)
      : this.fullItems.slice((previousPage - 1) * displayableItemsLength, previousPage * displayableItemsLength)
      this.currentPage = previousPage;
    }
  }

  goToNextPage() {
    const nextPage = this.currentPage + 1;
    if (nextPage <= this.totalPage) {
      this.displayableItems = this.fullItems.slice(this.currentPage * displayableItemsLength, nextPage * displayableItemsLength)
      this.currentPage = nextPage;
    }
  }
}
