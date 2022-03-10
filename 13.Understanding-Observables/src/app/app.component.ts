import { Component, OnInit } from '@angular/core';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private userService:UserService) {}
  activated:boolean=false;
  ngOnInit() {
    console.log(this.activated);

    this.userService.activate.subscribe(isactivated=>this.activated=isactivated)
  }
}
