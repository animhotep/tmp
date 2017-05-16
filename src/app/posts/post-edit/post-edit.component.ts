import { Component, OnInit } from '@angular/core';
import {Post, PostService} from '../post.service';
import {ActivatedRoute} from '@angular/router';
import {MdSnackBar} from "@angular/material";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
  providers: [PostService],
})
export class PostEditComponent implements OnInit {
  post: Post;
  id: number;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    public snackBar: MdSnackBar,
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => this.id = params['id']);

    this.postService.getPost(this.id)
      .subscribe(post => this.post = post);
  }

  onSubmit(postForm: NgForm) {
    if (postForm.valid){
      let msg = `Post ${this.post.id} from user ${this.post.userId} saved`;
      this.snackBar.open(msg);
    }else{
      this.snackBar.open('Fill required fields');
    }
  }
}
