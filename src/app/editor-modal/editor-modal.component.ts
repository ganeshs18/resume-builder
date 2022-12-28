import { Component } from '@angular/core';
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

}
