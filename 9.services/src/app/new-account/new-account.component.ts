import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging/logging.service';
import { AccountsService } from '../sevices/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private logService:LoggingService,private accService:AccountsService){
    accService.statusUpdated.subscribe(
      s=> alert(s)
    )
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.accService.addAccount({name:accountName,status:accountStatus})
this.logService.logStatusChange(accountStatus)
  }
}
