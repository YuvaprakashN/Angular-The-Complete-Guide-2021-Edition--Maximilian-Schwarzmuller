import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountsService } from '../sevices/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
 // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();
constructor(private accService:AccountsService){}

  onSetTo(status: string) {
   // this.statusChanged.emit({id: this.id, newStatus: status});\
   this.accService.updateAccount(this.id,status)
    console.log('A server status changed, new status: ' + status);
  }
}
