import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { EditauthorComponent } from './editauthor/editauthor.component';
import { AuthorsComponent } from './authors/authors.component';
import { QuotesComponent } from './quotes/quotes.component';
import { AddquoteComponent } from './addquote/addquote.component';
const routes: Routes = [
    {path:'',component:AuthorsComponent},
    {path:'new',component:AddauthorComponent},
    { path: 'edit/:id', component: EditauthorComponent},
    { path: 'quotes/:id', component: QuotesComponent},
    {path: 'write/:id',component: AddquoteComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  