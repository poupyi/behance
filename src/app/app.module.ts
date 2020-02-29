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
import { HomePageShopComponent } from './components/home-page-shop/home-page-shop.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SupportPopUpComponent,
    ProductsListComponent,
    HomePageHeaderComponent,
    HomePageShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
