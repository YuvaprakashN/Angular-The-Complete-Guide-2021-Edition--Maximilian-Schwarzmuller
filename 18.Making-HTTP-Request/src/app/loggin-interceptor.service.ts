import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class LoggingInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(' Hi, I am Interceptor 2');
   return  next.handle(req).pipe(
      tap((event) => {

        console.log('I am response interceptor 2');
        if(event.type=== HttpEventType.Response)
        console.log("Response Arrived 2");

      })
    );
  }
}
