import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { EditorModalComponent } from './editor-modal/editor-modal.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resumeForm!: FormGroup;
  editorConfig: AngularEditorConfig = {
    showToolbar: false,
    editable: false
  }
  constructor(public dialog: MatDialog, private formBuilder: FormBuilder) {
    this.buildForm();
  }

  openEditor(title: string, formControl?: AbstractControl | null) {
    const dialogRef = this.dialog.open(EditorModalComponent, {
      disableClose: true,
      height: '500px',
      width: '800px',
      data: {
        control: formControl as FormControl,
        title
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  buildForm() {
    this.resumeForm = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      profession: new FormControl(''),
      mobile: new FormControl('', [Validators.required, Validators.pattern(/[6-9][0-9]{9}/)]),
      social: this.formBuilder.array([this.getSocialForm()]),
      profSummary: new FormControl('')
    })
  }


  getSocialForm(): FormGroup {
    return this.formBuilder.group({
      siteName: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required])
    })
  }

  get socialFormArrayControls(): FormGroup[] {
    return this.socialFormArray.controls as FormGroup[];
  }

  private get socialFormArray(): FormArray {
    return this.resumeForm.get('social') as FormArray;
  }

  addSocialLink(): void {
    this.socialFormArray.push(this.getSocialForm());
  }

  deleteSocialLink(index: number): void {
    this.socialFormArray.removeAt(index);
  }

  getFormControl(control: AbstractControl | null): FormControl {
    return control as FormControl;
  }
}



