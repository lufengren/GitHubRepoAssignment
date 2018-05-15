import { Component, OnInit } from '@angular/core';
import { NinjaService } from '../ninja.service';
@Component({
  selector: 'app-ninja',
  templateUrl: './ninja.component.html',
  styleUrls: ['./ninja.component.css']
})
export class NinjaComponent implements OnInit {
  totalGold:any;
  messages:any; 
  scores:any;
  user:String;
  constructor(private _ninjaservice:NinjaService) {
    this.totalGold=0;
    this.messages=[]; 
    this.scores=[];
    this.user="";
  }
  
  ngOnInit() {
    var obs=this._ninjaservice.getTopFour();
    obs.subscribe(data=>{
      this.scores=data;
    })
  }

  addScore(){
    let obs=this._ninjaservice.addScore({user:this.user,score:this.totalGold})
    obs.subscribe(data=>{
      console.log(data);
    })
  }

  process(type,min,max){
    //console.log(type,min,max);
    let num=Math.floor(Math.random() * (max - min) ) + min;
    this.totalGold+=num;
    this.messages.push(`You went to the ${type} and earned ${num} golds!`);
  }

  
}
