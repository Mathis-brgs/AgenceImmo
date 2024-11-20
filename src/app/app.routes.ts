import { Routes } from '@angular/router';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { ListTodosComponent } from './components/list-todos/list-todos.component';
import { HomeComponent } from './components/home/home.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { Post } from './interfaces/post';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'posts',
    component: ListPostsComponent,
    title: 'List post page',
  },
  {
    path: 'todos',
    component: ListTodosComponent,
    title: 'List Todos Component',
  },
  {
    path: 'post/:id',
    component: SinglePostComponent,
    title: 'Post number',
  },
];
