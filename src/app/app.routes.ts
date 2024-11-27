import { Routes } from '@angular/router';
import { UsersComponent } from './views/users/users.component';
import { CreateUserComponent } from './views/create-user/create-user.component';

export const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'create-user', component: CreateUserComponent },
];
