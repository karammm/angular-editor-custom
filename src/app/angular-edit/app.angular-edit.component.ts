import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-editor',
  templateUrl: './app.angular-edit.component.html',
  styleUrls: ['./app.angular-edit.component.scss'],
})
export class AppEngularEditor implements OnInit {
  @Input() htmlContent: string;
  @Input() showToolbar: boolean;
  @Output() contentChanged = new EventEmitter<string>();

  @ViewChild('editor') editor: ElementRef;
  @Input() inputText: string;
  // htmlContent: string = '';
  // showToolbar: boolean = false;
  name = 'Angular 6';
  isditorVisible: boolean = false;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    showToolbar: false,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold', 'insertImage', 'insertVideo', 'link', 'unlink'],
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };

  ngOnInit(): void {
  }
  onKeyUp() {
    this.config.showToolbar = true;
    if (this.htmlContent === '') {
      this.config.showToolbar = false;
    }
    this.contentChanged.emit(this.htmlContent);
  }

  onContentChanged(event: any) {
    this.contentChanged.emit(event.editor.getContent());
  }
}
