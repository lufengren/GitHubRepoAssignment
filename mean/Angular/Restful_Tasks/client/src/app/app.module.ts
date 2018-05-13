import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AlphaComponent } from './alpha/alpha.component';
@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
