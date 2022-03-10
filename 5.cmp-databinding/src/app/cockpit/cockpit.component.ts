import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

@ViewChild('serverContentInput') serverContent:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  // newServerName = '';
  // newServerContent = '';
@Output("serverAdded") addServer=new EventEmitter<{type:string,name:string,content:string}>()
  onAddServer(serverName:HTMLInputElement) {
    this.addServer.emit(
      {
        type:"server",
        name:serverName.value,
        content:this.serverContent.nativeElement.value
      }
      )
  }

  onAddBlueprint(serverName:HTMLInputElement) {
    this.addServer.emit(
      {
        type:"blueprint",
        name:serverName.value,
        content:this.serverContent.nativeElement.value
      })
  }
}
