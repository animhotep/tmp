import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostViewComponent } from './post-view/post-view.component';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PostViewComponent, PostListComponent]
})
export class PostsModule { }
