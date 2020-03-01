import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePagePopularComponent } from './home-page-popular.component';

describe('HomePagePopularComponent', () => {
  let component: HomePagePopularComponent;
  let fixture: ComponentFixture<HomePagePopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePagePopularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePagePopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
