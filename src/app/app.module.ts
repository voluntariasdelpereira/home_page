import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  MatCardModule,
  MatIconModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
  MatGridListModule,
  MatListModule, MatChipsModule
} from "@angular/material";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatSidenavModule,NoopAnimationsModule, MatIconModule, MatTabsModule, MatCardModule, MatGridListModule, MatListModule, MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
