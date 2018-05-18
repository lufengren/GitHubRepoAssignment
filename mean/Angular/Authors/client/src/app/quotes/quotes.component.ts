import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  id:any;
  quotes:any;
  author:any;
  constructor(private _http:AuthorService,private _route: ActivatedRoute,
    private _router: Router) { 
      this.quotes=[];
      this.author={};
    }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.id=params['id'];
    });
    this.getQuotes();
  }

  getQuotes(){
    let obs=this._http.getQuotes(this.id);
    obs.subscribe(data=>{
      //console.log(data);
      this.author=data[0];
      this.quotes=data[0].quotes;
      //console.log(this.quotes);
    });
  }


  deleteQuote(quoteid,quote){
    console.log(quoteid);
    let obs=this._http.deleteQuote(quoteid,this.author);
    obs.subscribe(data=>{
      //console.log('delete quote',data);
      this.getQuotes();
    })
  }

  voteUp(quoteid,vote){
    vote+=1;
    let updateinfo={
      id:quoteid,
      vote:vote,
      author:this.author
    }
    let obs=this._http.voteUpdate(updateinfo);
    obs.subscribe(data=>{
      //console.log('delete quote',data);
      this.getQuotes();
    })
  }

}


// deleteQuote(q_id){
//   let temp = this._httpService.deleteQuote(q_id,this.author)
//   temp.subscribe(data=>{
//     this.getQuotes();
//   })
// }