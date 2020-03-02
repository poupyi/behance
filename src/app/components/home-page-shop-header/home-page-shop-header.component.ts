import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-page-shop-header',
  templateUrl: './home-page-shop-header.component.html',
  styleUrls: ['./home-page-shop-header.component.sass']
})
export class HomePageShopHeaderComponent implements OnInit {
  @Input() title: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
