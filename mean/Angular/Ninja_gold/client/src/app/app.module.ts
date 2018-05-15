import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NinjaComponent } from './ninja/ninja.component';

import { HttpClientModule } from '@angular/common/http';
import { NinjaService } from './ninja.service';
@NgModule({
  declarations: [
    AppComponent,
    NinjaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NinjaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
