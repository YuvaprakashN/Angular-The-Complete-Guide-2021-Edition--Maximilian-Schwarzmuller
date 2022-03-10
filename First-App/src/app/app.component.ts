import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'first-app';
    selectedFeature='recipe'

    constructor(private authService: AuthService) {}

    ngOnInit() {
      this.authService.autoLogin();
    }

}
