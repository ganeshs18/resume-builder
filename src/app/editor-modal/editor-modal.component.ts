import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { editorConfig } from '../config/editor.config';

@Component({
  selector: 'app-editor-modal',
  templateUrl: './editor-modal.component.html',
  styleUrls: ['./editor-modal.component.css']
})
export class EditorModalComponent {

  htmlContent: any;
  editorConfig: AngularEditorConfig = editorConfig;

  constructor(private dialogRef: MatDialogRef<EditorModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

}
