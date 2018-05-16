import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { EditauthorComponent } from './editauthor/editauthor.component';
import { AuthorsComponent } from './authors/authors.component';
const routes: Routes = [
    {path:'',component:AuthorsComponent},
    {path:'new',component:AddauthorComponent},
    { path: 'edit/:id', component: EditauthorComponent,}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  