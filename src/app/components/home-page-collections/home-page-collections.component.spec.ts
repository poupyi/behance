import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageCollectionsComponent } from './home-page-collections.component';

describe('HomePageCollectionsComponent', () => {
  let component: HomePageCollectionsComponent;
  let fixture: ComponentFixture<HomePageCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
