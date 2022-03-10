import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { isArray } from 'rxjs/internal-compatibility';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadedPosts: any[] = [];
  isFetching:boolean=true;
  errorMessage=null;
  //angular-http-practice-450b1-default-rtdb.firebaseio.com

  constructor(private http: HttpClient,private postService:PostService ) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((posts) => {
      this.loadedPosts=posts;
      this.isFetching=false
    }

    );
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.postService.createPost(postData)
      .subscribe((res) => console.log(res));
    console.log(postData);
    setTimeout(() => {
      this.onFetchPosts()

    }, 1000);
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching=true
    this.postService.getPosts().subscribe((posts) => {
      this.loadedPosts=posts;
      this.isFetching=false
    },error=>{
      this.errorMessage=error.message
    });
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePost().subscribe(()=>this.loadedPosts=[])
  }

}
