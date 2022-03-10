import { Injectable } from '@angular/core';


export class LoggingService {

  constructor() { }
  logStatusChange(message:string){
    console.log('A server status changed, new status: ' + message);
  }
}
