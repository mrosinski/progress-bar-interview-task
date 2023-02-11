import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from '././home/home.component';
import { WindowComponent } from './window/window.component';

@NgModule({
  declarations: [
    HomeComponent,
    WindowComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
