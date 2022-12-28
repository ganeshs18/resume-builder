import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditorModalComponent } from './editor-modal/editor-modal.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resume-builder';
  htmlContent: any;

  constructor(public dialog: MatDialog) {

  }

  openEditor() {
    const dialogRef = this.dialog.open(EditorModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}



