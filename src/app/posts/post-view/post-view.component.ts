import { Component, OnInit } from '@angular/core';
import {Post, PostService} from "../post.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css'],
  providers: [PostService],
})
export class PostViewComponent implements OnInit {
  post: Post;
  id: number;

  constructor(
  private postService: PostService,
  private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => this.id = params['id']);

    this.postService.getPost(this.id)
      .subscribe(post => this.post = post);
  }

}
