import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookBrowseComponent } from './book-browse/book-browse.component';

@NgModule({
  declarations: [
    AppComponent,
    BookBrowseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
