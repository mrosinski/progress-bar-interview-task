import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RootComponent} from "./root/root.component";
import {ProgressBarComponent} from "./progress-bar/progress-bar.component";

@NgModule({
  declarations: [
    RootComponent,
    ProgressBarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
