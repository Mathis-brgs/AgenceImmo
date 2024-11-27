// import { Component, inject } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
// import { PostsService } from '../../services/posts.service';
// import { Post } from '../../interfaces/post';
// import { ListPostsComponent } from '../list-posts/list-posts.component';
// @Component({
//   selector: 'app-new-posts',
//   standalone: true,
//   imports: [FormControl, FormGroup, ReactiveFormsModule],
//   templateUrl: './new-posts.component.html',
//   styleUrl: './new-posts.component.scss',
// })
// export class NewPostsComponent {
//   route: ActivatedRoute = inject(ActivatedRoute);
//   postService = inject(PostsService);
//   post: Post | undefined;
//   applyForm = new FormGroup({
//     postId: new FormControl(''),
//     postTitle: new FormControl(''),
//     postBody: new FormControl(''),
//     postUserId: new FormControl(''),
//   });
//   constructor() {
//     const postId = parseInt(this.route.snapshot.params['id'], 10);
//     this.post = this.postService.getPostById(postId);
//   }
//   submitApplication() {
//     this.postService.submitApplication(
//       this.applyForm.value.postId ?? '',
//       this.applyForm.value.postTitle ?? '',
//       this.applyForm.value.postBody ?? '',
//       this.applyForm.value.postUserId ?? ''
//     );
//   }
// }
