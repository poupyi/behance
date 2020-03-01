import { Component, OnInit } from '@angular/core';
import { ProductCard } from "../../models/product-card";

@Component({
  selector: 'app-home-page-popular',
  templateUrl: './home-page-popular.component.html',
  styleUrls: ['./home-page-popular.component.sass']
})
export class HomePagePopularComponent implements OnInit {

  items: ProductCard[] = [
    {
      imageUrl: 'assets/sphere.png',
      isItemHot: false,
      itemName: 'Picklesuit',
      creator: 'John Doelson',
      price: 155.00,
      backgroundColor: '#efebec'
    }, {
      imageUrl: 'assets/sphere.png',
      isItemHot: true,
      itemName: 'Picklesuit',
      creator: 'John Doelson',
      price: 155.00,
      backgroundColor: '#f0f0f0'
    }, {
      imageUrl: 'assets/sphere.png',
      isItemHot: false,
      itemName: 'Picklesuit',
      creator: 'John Doelson',
      price: 155.00,
      backgroundColor: '#c0dbe9'
    }, {
      imageUrl: 'assets/sphere.png',
      isItemHot: false,
      itemName: 'Picklesuit',
      creator: 'John Doelson',
      price: 155.00,
      backgroundColor: '#efebec'
    }, {
      imageUrl: 'assets/sphere.png',
      isItemHot: false,
      itemName: 'Picklesuit',
      creator: 'John Doelson',
      price: 155.00,
      backgroundColor: '#f0f0f0'
    }, {
      imageUrl: 'assets/sphere.png',
      isItemHot: false,
      itemName: 'Picklesuit',
      creator: 'John Doelson',
      price: 155.00,
      backgroundColor: '#c0dbe9'
    }, {
      imageUrl: 'assets/sphere.png',
      isItemHot: true,
      itemName: 'Picklesuit',
      creator: 'John Doelson',
      price: 155.00,
      backgroundColor: '#efebec'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
