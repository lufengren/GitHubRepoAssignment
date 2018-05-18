import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private _http:HttpClient) { }
  getAllAuthors(){
    return this._http.get('/authors');
  }
  addAuthor(newauthor){
    return this._http.post('/authors',newauthor);
  }
  getOneAuthor(id){
    return this._http.get('/authors/'+id);
  }
  updateAuthor(updateinfo){
    return this._http.put('/authors/'+updateinfo.id,updateinfo);
  }
  deleteAuthor(id){
    return this._http.delete('/authors/'+id);
  }
  getQuotes(id){
    return this._http.get('/quotes/'+id);
  }
  addQuotes(newquote){
    return this._http.post('/quotes',newquote);
  }
  updateQuote(updateinfo){
    return this._http.put('/quotes/'+updateinfo.id,updateinfo);
  }
  deleteQuote(id,author){
    return this._http.put('/quotes/'+id,author);
  }
  voteUpdate(updateinfo){
    return this._http.put('/votes/'+updateinfo.id,updateinfo);
  }
}
