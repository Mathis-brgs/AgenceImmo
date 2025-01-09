import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/post';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.scss',
})
export class ListPostsComponent {
  postsService = inject(PostsService);
  postsList: Post[] = [];
  filteredPostsList: Post[] = [];

  constructor() {
    this.postsService.getPosts().then((posts: Post[]) => {
      this.postsList = posts;
      this.filteredPostsList = posts;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredPostsList = this.postsList;
    } else {
      this.filteredPostsList = this.postsList.filter((post) =>
        post.title?.toLowerCase().includes(text.toLowerCase())
      );
    }
  }
}
