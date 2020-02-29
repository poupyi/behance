import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageIndoorOutdoorComponent } from './home-page-indoor-outdoor.component';

describe('HomePageIndoorOutdoorComponent', () => {
  let component: HomePageIndoorOutdoorComponent;
  let fixture: ComponentFixture<HomePageIndoorOutdoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageIndoorOutdoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageIndoorOutdoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
