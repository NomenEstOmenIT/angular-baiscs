import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {
      title: 'Want learn Angular components',
      text: 'I steal leatning componets',
      id: 1
    },
    { title: 'Next block', text: 'Will be about directives and pipes', id: 2 }
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
    // console.log('Post', post);
  }

  removePost(id: number) {
    console.log('removePost', id);
    this.posts = this.posts.filter(p => p.id !== id);
  }
}
