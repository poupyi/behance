import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SupportPopUpComponent } from './components/support-pop-up/support-pop-up.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { HomePageHeaderComponent } from './components/home-page-header/home-page-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { HomePageShopComponent } from './components/home-page-shop/home-page-shop.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomePageIndoorOutdoorComponent } from './components/home-page-indoor-outdoor/home-page-indoor-outdoor.component';
import { HomePagePopularComponent } from './components/home-page-popular/home-page-popular.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { HomePageCollectionsComponent } from './components/home-page-collections/home-page-collections.component';
import { HomePageShopHeaderComponent } from './components/home-page-shop-header/home-page-shop-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SupportPopUpComponent,
    ProductsListComponent,
    HomePageHeaderComponent,
    HomePageShopComponent,
    CarouselComponent,
    HomePageIndoorOutdoorComponent,
    HomePagePopularComponent,
    ProductCardComponent,
    NewsletterComponent,
    FooterComponent,
    NavigationMenuComponent,
    HomePageCollectionsComponent,
    HomePageShopHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatBadgeModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
