import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  error = new Subject<string>();
  constructor(private http: HttpClient) {}
  fireBaseURL: string =
    'https://angular-http-practice-450b1-default-rtdb.firebaseio.com';

  createPost(postData: Post) {
    // Send Http request
    return this.http.post<{ name: string }>(
      this.fireBaseURL + '/posts.json',
      postData,
      {observe:'response'}
    );

    // return this.http
    // .post<{name:string}>(this.fireBaseURL + '/posts.json', postData)
    //.subscribe(res=>console.log(res),err=>this.error.next("Not able to create Post")      )
  }

  getPosts() {
    let searchParams=new HttpParams()
    searchParams=searchParams.append('print','pretty')
    searchParams=searchParams.append('custom','hello')

    return this.http
      .get<{ [key: string]: Post }>(this.fireBaseURL + '/posts.json',
      {
        headers:new HttpHeaders({'custom-header':'hello'}),
        //params:new HttpParams().set('print','pretty')
        params:searchParams,
        responseType:'json'
      }
      )
      .pipe(
        map((responseData) => {
          //  console.log({...responseData[0]});
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError((error) => {

          console.log(error);
          return throwError(error);
        })
      );
  }

  deletePost() {
    return this.http.delete(this.fireBaseURL + '/posts.json',{observe:'events'});
  }
}
