import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors:any;
  constructor(private _http:AuthorService,private _route: ActivatedRoute,
    private _router: Router) { 
    this.authors=[];
  }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    var obs=this._http.getAllAuthors();
    obs.subscribe(data=>{
      this.authors=data;
    });
  }

  // goadd(){
  //   this._router.navigate(['/new']);
  // }

  deleteAuthor(id){
    let obs=this._http.deleteAuthor(id);
    obs.subscribe(data=>{
      //this._router.navigate(['/']);
      this.getAll();
    });
  }

}
