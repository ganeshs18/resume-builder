import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { EditorModalComponent } from './editor-modal/editor-modal.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resume-builder';
  htmlContent: any;
  mobileControl = new FormControl('')
  editorConfig: AngularEditorConfig = {
    showToolbar: false,
    editable: false
  }
  constructor(public dialog: MatDialog) {

  }

  openEditor(title: string, content?: any) {
    const dialogRef = this.dialog.open(EditorModalComponent, {
      disableClose: true,
      height: '500px',
      width: '800px',
      data: {
        content,
        title
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}



