import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NinjaService {

  constructor(private _http:HttpClient) { }
  getTopFour(){
    return this._http.get('/topFour');
  }
  addScore(data){
    return this._http.post('/scores',data);
  }
}
