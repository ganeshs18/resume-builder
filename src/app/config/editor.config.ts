import { AngularEditorConfig } from "@kolkov/angular-editor";

export const editorConfig: AngularEditorConfig = {
  height: '53vh',
  editable: true,
  spellcheck: true,
  outline: false,
  enableToolbar: true,
  showToolbar: true,
  placeholder: 'Enter text here...',
  fonts: [
    { class: 'arial', name: 'Arial' },
    { class: 'times-new-roman', name: 'Times New Roman' },
    { class: 'calibri', name: 'Calibri' },
    { class: 'comic-sans-ms', name: 'Comic Sans MS' }
  ],
  sanitize: true,
  toolbarPosition: 'top',
  toolbarHiddenButtons: [
    [
      'strikeThrough',
      'subscript',
      'superscript',
      'indent',
      'outdent',
      'heading',
      'fontName'
    ],
    [
      'link',
      'unlink',
      'insertImage',
      'insertVideo',
      'insertHorizontalRule',
      'toggleEditorMode',
      'backgroundColor',
      'textColor'
    ]
  ]
};