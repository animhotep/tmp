import { Component, OnInit } from '@angular/core';
import {Post, PostService} from "../post.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostService],
})
export class PostListComponent implements OnInit {
  posts: Post[];

  constructor(
    private postService: PostService,
  ) { }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
