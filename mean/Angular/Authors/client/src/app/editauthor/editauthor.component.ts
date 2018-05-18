import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthorService } from '../author.service';
@Component({
  selector: 'app-editauthor',
  templateUrl: './editauthor.component.html',
  styleUrls: ['./editauthor.component.css']
})
export class EditauthorComponent implements OnInit {
  id:any;
  author:any;
  errors:any;
  constructor(private _route: ActivatedRoute,
    private _authorService: AuthorService,
    private _router: Router) { 
    this.errors=[];
    }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.id=params['id'];
    });
    let obs=this._authorService.getOneAuthor(this.id);
    obs.subscribe(data=>{
      console.log(data);
      this.author=data['author'];
    })
  }

  editAuthor(){
    let obs=this._authorService.updateAuthor({id:this.id,author:this.author});
    obs.subscribe(data=>{
      console.log(data);
      if(data['errors']){
        this.errors=data;
      }else{
        this._router.navigate(['/']);
      }
    });
  }
}

