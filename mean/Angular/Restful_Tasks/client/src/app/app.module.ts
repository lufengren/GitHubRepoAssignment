import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AlphaComponent } from './alpha/alpha.component';
import { TaskComponent } from './task/task.component';
@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
