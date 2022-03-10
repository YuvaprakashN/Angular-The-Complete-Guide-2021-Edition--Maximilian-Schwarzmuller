import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import {map,filter} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private firstSubscription: Subscription;
  constructor() {}

  ngOnInit() {
    // this.firstSubscription=interval(1000).subscribe(count=>console.log(count));
    var randomNumberGenerator = Observable.create((observer: any) => {
      let count: number = 0;
      setInterval(function () {
        // var randomNumber = Math.floor(Math.random() * 100);

        // if(randomNumber == 13) {
        //   observer.error("Incorrect Random Number Generated");
        // } else if(randomNumber == 99) {
        //   observer.complete();
        // } else {
        //   observer.next(randomNumber);
        // }
        observer.next(count);
        if(count===6)
        observer.error(new Error("Count is three"));
        if(count===5)
        observer.complete()
        count=count+1;
      }, 1000);
    });

    this.firstSubscription= randomNumberGenerator.pipe(
      filter(
        (data: number) => {
          return data !== 1;
        }
      ),
      map((data:number) => {
        return  'Round: '+data;
      })
      ).subscribe(
        (data: any) => console.log(data),  //handle emitted data
        (error: any) => console.log(error), //handle error
        () => console.log( "Completed")   //completes

    )
    // this.firstSubscription=randomNumberGenerator.subscribe(
    //   (data: any) => console.log(data),  //handle emitted data
    //   (error: any) => console.log(error), //handle error
    //   () => console.log( "Completed")   //completes
    //   )
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.firstSubscription.unsubscribe();
  }
}
