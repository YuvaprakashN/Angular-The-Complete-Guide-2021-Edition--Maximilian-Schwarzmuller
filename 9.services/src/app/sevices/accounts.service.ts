import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  constructor() { }

  statusUpdated=new EventEmitter<string>()
  addAccount(acc:{name:string,status:string}){
    this.accounts.push(acc)
  }
  updateAccount(index:number,status:string){
    this.accounts[index].status=status
    this.statusUpdated.emit(status)

  }
}
