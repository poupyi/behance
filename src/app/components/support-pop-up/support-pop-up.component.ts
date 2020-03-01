import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-support-pop-up',
  templateUrl: './support-pop-up.component.html',
  styleUrls: ['./support-pop-up.component.sass']
})
export class SupportPopUpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SupportPopUpComponent>) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
