import { Component,OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  tasks =[];
  newTask:any;
  constructor(private _httpService: HttpService){
  }

  ngOnInit(){
    this.newTask={title:"",description:""}
    this.getalltasks();
  }

  onSubmit(){
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data=>{console.log("create new task");
  });
    // Reset this.newTask to a new, clean object.
    this.newTask = { title: "", description: "" }
  }

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

  deleteTask(id){
    let observable = this._httpService.deleteTask(id);
    observable.subscribe(data=>{console.log("delete a task");
  });
  }
  
}
