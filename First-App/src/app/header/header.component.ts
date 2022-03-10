import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed: boolean = true;
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private dataStorage:DataStorageService,private authService:AuthService) {}
  @Output() featureSelected = new EventEmitter<string>();
  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      console.log(user);

     this.isAuthenticated = !!user;
     console.log(!user);
     console.log(!!user);
   });
  }
  // selectFeature(feature: string) {
  //  // this.featureSelected.emit(feature);

  // }

  onSave(){
this.dataStorage.storeRecipes()
  }
  onFetch(){
this.dataStorage.getRecipes().subscribe()
  }
  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
