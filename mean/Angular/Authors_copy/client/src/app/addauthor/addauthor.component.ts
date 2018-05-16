import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {
  author:any;
  errors:any;
  constructor(private _authorservice:AuthorService,private _router : Router) { 
    this.author="";
    this.errors=[];
  }

  ngOnInit() {
  }
  addAuthor(){
    let obs=this._authorservice.addAuthor({author:this.author});
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
