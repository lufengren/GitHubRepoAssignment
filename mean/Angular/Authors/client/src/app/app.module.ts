import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthorService } from './author.service';
import { AuthorsComponent } from './authors/authors.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { EditauthorComponent } from './editauthor/editauthor.component';
import { AppRoutingModule } from './app.route';
import { QuotesComponent } from './quotes/quotes.component';
import { AddquoteComponent } from './addquote/addquote.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    AddauthorComponent,
    EditauthorComponent,
    QuotesComponent,
    AddquoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
