import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { ListTodosComponent } from './components/list-todos/list-todos.component';
import { SinglePostComponent } from './components/single-post/single-post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ListPostsComponent,
    ListTodosComponent,
    RouterModule,
    SinglePostComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AgenceImmo';
}
