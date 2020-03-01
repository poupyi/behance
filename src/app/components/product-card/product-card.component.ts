import { Component, OnInit, Input } from '@angular/core';
import { ProductCard } from "../../models/product-card";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {
  @Input() product: ProductCard;
  constructor() { }

  ngOnInit(): void {
  }

  getBackgroundStyle() {
    return {
      'background-color': this.product.backgroundColor
    };
  }
}
