import { i18nFormatPlaceholderNames } from '@angular/compiler/src/render3/view/i18n/util';
import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  AngularEditorConfig,
} from '@kolkov/angular-editor';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  htmlContent: string = '';
  showToolbar: boolean = false;
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

  @ViewChild('editor') editor: ElementRef;
  constructor(private renderer: Renderer2) {}

  
  onKeyUp() {
    this.config.showToolbar = true;
    if(this.htmlContent === ''){
      this.config.showToolbar = false;
    }
  }
}
