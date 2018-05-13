import { Component,OnInit } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  tasks =[];
  task =[];
  constructor(private _httpService: HttpService){
    //this.tasks = [{title:'test',description:'desdes'},{title:'test',description:'desdes'},{title:'test',description:'desdes'}];
  }
  // ngOnInit(){
  //   this.getalltasks();
  // }
  getalltasks(){
    //this._httpService.getTasks();
    let observable = this._httpService.getTasks();
    observable.subscribe(datas => {console.log("Got all tasks!", datas)
    for(var key in datas){
      this.tasks.push(datas[key]);
    }
    //console.log(this.tasks);
    });
  }

  getTask(id){
    let observable = this._httpService.getTask(id);
    observable.subscribe(datas => {console.log("Got the task!", datas)
      this.task.push(datas);
  });
}
}
