import { Component } from '@angular/core';
import { AuthorService } from './author.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app';
  constructor (
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit() {
    //this._route.params.subscribe((params: Params) => console.log(params['id']));
    this.goHome();
  }
  goHome() {
    this._router.navigate(['/']);
  }
}
