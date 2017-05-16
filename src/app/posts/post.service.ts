import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

let postsUrl = 'https://jsonplaceholder.typicode.com/posts/';

export class Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Injectable()
export class PostService {

  constructor(
    private http: Http,
  ) { }

  getPosts(): Observable<Post[]> {
    return this.http
      .get(postsUrl)
      .map(response => response.json() as Post[]);
  }

  getPost(id: number): Observable<Post> {
    return this.http
      .get(`${postsUrl}/${id}`)
      .map(response => response.json() as Post);
  }
}
