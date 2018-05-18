import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-addquote',
  templateUrl: './addquote.component.html',
  styleUrls: ['./addquote.component.css']
})
export class AddquoteComponent implements OnInit {
  id:any;
  quote:any;
  vote:any;
  newquote:any;
  errors:any;
  result:any;
  constructor(private _http:AuthorService,private _route: ActivatedRoute,
    private _router: Router) {
      this.vote=0;
    }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.id=params['id'];
      console.log(this.newquote);
    });
    let obs=this._http.getOneAuthor(this.id);
    obs.subscribe(data=>{
      this.result=data['author'];
      console.log(data);
    })
    
  }
  addQuote(){
    this.newquote={
      id:this.id,
      quote:this.quote,
      vote:this.vote
    }
      let obs=this._http.addQuotes(this.newquote);
      obs.subscribe(data=>{
        console.log(data);
        // if(data['errors']){
        //   this.errors=data;
        // }else{
        //   this._router.navigate(['/quotes/'+this.id]);
        // }
        this._router.navigate(['/quotes/'+this.id]);
      });
  }
}
