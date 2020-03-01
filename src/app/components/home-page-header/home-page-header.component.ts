import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SupportPopUpComponent } from '../support-pop-up/support-pop-up.component';

@Component({
  selector: 'app-home-page-header',
  templateUrl: './home-page-header.component.html',
  styleUrls: ['./home-page-header.component.sass']
})
export class HomePageHeaderComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  displayPopUp() {
    this.dialog.open(SupportPopUpComponent);
  }
}
