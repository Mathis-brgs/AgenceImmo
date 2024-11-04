import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { ListTodosComponent } from './components/list-todos/list-todos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListPostsComponent, ListTodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AgenceImmo';
}
