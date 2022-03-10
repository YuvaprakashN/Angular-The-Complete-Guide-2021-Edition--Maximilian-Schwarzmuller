import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements:any = [{type:"server",name:"Test",content:"Terst Content"}];

  onServerAdded(data:{type:string,name:string,content:string}){
    this.serverElements.push(data)
  }

}
