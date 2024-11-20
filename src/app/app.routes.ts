import { Routes } from '@angular/router';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { ListTodosComponent } from './components/list-todos/list-todos.component';
import { HomeComponent } from './components/home/home.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { NewPostsComponent } from './components/new-posts/new-posts.component';

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
    path: 'posts/new',
    component: NewPostsComponent,
    title: 'New List',
  },
  {
    path: 'todos',
    component: ListTodosComponent,
    title: 'List Todos',
  },
  {
    path: 'post/:id',
    component: SinglePostComponent,
    title: 'Post number',
  },
];
