import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Component} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import {PostViewComponent} from "./posts/post-view/post-view.component";
import {PostListComponent} from "app/posts/post-list/post-list.component";


const routes: Routes = [
  { path: '',  component: PostListComponent},
  { path: 'posts/:id',  component: PostViewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
