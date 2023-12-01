// src/app/app.module.ts
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { JokeComponent } from './joke/joke.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,

  ],
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule, // Add this line
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
