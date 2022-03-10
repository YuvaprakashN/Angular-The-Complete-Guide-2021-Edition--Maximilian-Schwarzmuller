import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string}|any;

  constructor(private serversService: ServersService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    //this.route.params.subscribe((p:Params)=>)
    // let id=+this.route.snapshot.params["id"];
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe((p:Params)=>{this.serversService.getServer(+p["id"]);
    this.route.data.subscribe(s=>this.server=s['server'])

  }

  onEdit(){
    this.router.navigate(['edit'],{relativeTo:this.route,queryParamsHandling:'preserve'});
  }
}
