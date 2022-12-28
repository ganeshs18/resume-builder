import { AngularEditorConfig } from "@kolkov/angular-editor";

export const editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    outline: false,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
        { class: 'arial', name: 'Arial' },
        { class: 'times-new-roman', name: 'Times New Roman' },
        { class: 'calibri', name: 'Calibri' },
        { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    uploadUrl: 'v1/image',
    // upload: (file: File) => { },
    uploadWithCredentials: false,
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
            'toggleEditorMode'
          ]
    ]
};