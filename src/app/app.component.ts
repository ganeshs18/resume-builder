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
      profSummary: new FormControl(''),
      skills: this.formBuilder.array([this.getSkillForm()]),
      work: this.formBuilder.array([this.getWorkForm()]),
      education: this.formBuilder.array([this.getEducationForm()]),
      // sections:,
    })
  }

  getFormControl(control: AbstractControl | null): FormControl {
    return control as FormControl;
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


  getSkillForm(): FormGroup {
    return this.formBuilder.group({
      skillName: new FormControl('', [Validators.required]),
      skillRating: new FormControl(0, [Validators.required])
    })
  }

  get skillsFormArrayControls(): FormGroup[] {
    return this.skillsFormArray.controls as FormGroup[];
  }

  private get skillsFormArray(): FormArray {
    return this.resumeForm.get('skills') as FormArray;
  }

  addSkill(): void {
    this.skillsFormArray.push(this.getSkillForm());
  }

  deleteSkill(index: number): void {
    this.skillsFormArray.removeAt(index);
  }

  // --------------- // 

  getWorkForm(): FormGroup {
    return this.formBuilder.group({
      jobTitle: new FormControl('', [Validators.required]),
      employer: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('',),
      workDesc: new FormControl('', [Validators.required]),
      isCurrentlyWorking: new FormControl(false),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required])
    })
  }

  get workFormArrayControls(): FormGroup[] {
    return this.workFormArray.controls as FormGroup[];
  }

  private get workFormArray(): FormArray {
    return this.resumeForm.get('work') as FormArray;
  }

  addWork(): void {
    this.workFormArray.push(this.getWorkForm());
  }

  deleteWork(index: number): void {
    this.workFormArray.removeAt(index);
  }

  getEducationForm(): FormGroup {
    return this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      degreeType: new FormControl('', [Validators.required]),
      field: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('',),
      educationDesc: new FormControl(''),
    })
  }

  get educationFormArrayControls(): FormGroup[] {
    return this.educationFormArray.controls as FormGroup[];
  }

  private get educationFormArray(): FormArray {
    return this.resumeForm.get('education') as FormArray;
  }

  addEducation(): void {
    this.educationFormArray.push(this.getEducationForm());
  }

  deleteEducation(index: number): void {
    this.educationFormArray.removeAt(index);
  }

  onSubmit(){
    this.resumeForm.markAllAsTouched();
    console.log(this.resumeForm.value)
  }
}



