import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-custom-error-page',
  templateUrl: './custom-error-page.component.html',
  styleUrls: ['./custom-error-page.component.css']
})
export class CustomErrorPageComponent implements OnInit {

  constructor(private routr:ActivatedRoute) {
  }
  errorMessage:string;
  ngOnInit(): void {
    this.errorMessage=this.routr.snapshot.data['message'];
    this.routr.data.subscribe(s=>this.errorMessage=s['message'])
  }

}
