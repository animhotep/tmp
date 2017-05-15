import { Component, OnInit } from '@angular/core';
import {Post, PostService} from "./posts/post.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService],
})

export class AppComponent implements OnInit {
  posts: Post[];

  constructor(
    private postService: PostService,
  ) { }

  ngOnInit() {
     this.postService.getPosts()
       .subscribe(posts => this.posts = posts);
  }
}
