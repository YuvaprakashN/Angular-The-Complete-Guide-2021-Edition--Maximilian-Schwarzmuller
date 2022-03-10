import { Injectable } from "@angular/core";
import { Subject, Subscriber } from "rxjs";

@Injectable({providedIn:"root"})
export class UserService{
activate=new Subject<boolean>();
}
