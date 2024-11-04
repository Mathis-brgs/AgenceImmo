import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.scss',
})
export class ListPostsComponent {
  postsService = inject(PostsService);
  postList: Post[] = [];

  constructor() {
    this.postsService.getPosts().then((posts: Post[]) => {
      this.postList = posts;
    });
    // this.postList = this.postsService.getPosts();
  }
}
