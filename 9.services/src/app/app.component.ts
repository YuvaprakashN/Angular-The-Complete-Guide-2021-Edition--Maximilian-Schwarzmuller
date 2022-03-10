import { Component } from '@angular/core';
import { AccountsService } from './sevices/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountsService]
})
export class AppComponent {
  accounts:{name:string,status:string}[]=[]
constructor(private accService:AccountsService){}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.accounts=this.accService.accounts
}
}
