import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";

interface server{
  id:number,
  name:string,
  status:string
}

@Injectable({providedIn:'root'})
export class ServerResolver implements Resolve<{ id: number; name: string; status: string; } | undefined>{
  constructor(private serversService:ServersService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): { id: number; name: string; status: string; } | undefined | Observable<{ id: number; name: string; status: string; } | undefined> | Promise<{ id: number; name: string; status: string; } | undefined> {
    return this.serversService.getServer(+route.params['id']);
  }


}
