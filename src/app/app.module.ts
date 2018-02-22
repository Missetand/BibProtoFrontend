import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppNavbarComponent, MaterialFilterComponent, MaterialListComponent } from './_components/index';
import { FilterPipe } from './_pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    MaterialListComponent,
    MaterialFilterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
