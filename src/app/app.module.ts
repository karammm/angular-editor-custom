import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { AppComponent } from './app.component';
import { AppEngularEditor } from './angular-edit/app.angular-edit.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AngularEditorModule, HttpClientModule ],
  declarations: [ AppComponent, AppEngularEditor ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
