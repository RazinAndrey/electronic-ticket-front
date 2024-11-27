import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export abstract class UserService {
  public abstract getUser(id: number): Observable<User | undefined>;
  public abstract getUsers(): Observable<User[]>;
  public abstract createUser(user: User): Observable<User[]>;
  public abstract updateUser(user: User): Observable<User[]>;
  public abstract deleteUser(id: number): Observable<User[]>;
}
