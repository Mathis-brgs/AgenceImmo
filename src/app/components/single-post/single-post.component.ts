import { Component, inject } from '@angular/core';
import { Post } from '../../interfaces/post';
import { PostsService } from '../../services/posts.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss',
})
export class SinglePostComponent {
  postsService = inject(PostsService);
  postList: Post[] = [];

  constructor() {
    this.postsService.getPosts().then((posts: Post[]) => {
      this.postList = posts;
    });
  }
}
