import { Component, OnInit, Input } from '@angular/core';
import { CarouselItem } from '../../models/carousel-item';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit {
  @Input() items: CarouselItem[];
  selectedItem: CarouselItem;

  constructor() { }

  ngOnInit(): void {
    this.selectedItem = this.items[0];
  }

  getPaginationClass(item: CarouselItem) {
    return {
      "pagination-selected": item.id === this.selectedItem.id
    };
  }

  selectItem(selectedItem: CarouselItem) {
    this.selectedItem = this.items.filter(item => item.id === selectedItem.id)[0];
  }
}
