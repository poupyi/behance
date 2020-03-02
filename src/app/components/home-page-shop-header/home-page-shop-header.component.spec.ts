import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageShopHeaderComponent } from './home-page-shop-header.component';

describe('HomePageShopHeaderComponent', () => {
  let component: HomePageShopHeaderComponent;
  let fixture: ComponentFixture<HomePageShopHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageShopHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageShopHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
