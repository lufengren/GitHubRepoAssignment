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
}
