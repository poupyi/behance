import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageShopComponent } from './home-page-shop.component';

describe('HomePageShopComponent', () => {
  let component: HomePageShopComponent;
  let fixture: ComponentFixture<HomePageShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
