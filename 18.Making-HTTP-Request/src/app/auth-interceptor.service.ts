import { HttpEvent, HttpEventType, HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";


export class AuthInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Hi, I am Interceptor 1");
    //console.log(req);

    const modifiedReq=req.clone({headers:req.headers.append('auth','xyz')})
   return  next.handle(modifiedReq).pipe(
     tap(event=>{
       console.log('I am Response Interceptor 1');
       if(event.type===HttpEventType.Response){
         console.log('Response Arrived 1');
         //console.log(event);
       }
     })
   );
  }
}
