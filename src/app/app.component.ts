import { i18nFormatPlaceholderNames } from '@angular/compiler/src/render3/view/i18n/util';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  htmlContent: string ;
  showToolbar: boolean = false;

  onContentChanged(event: any) {
     this.htmlContent = event;
  }

  ngOnInit(): void {
    this.htmlContent="check";
  }
}
