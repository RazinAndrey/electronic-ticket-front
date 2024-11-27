import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class MockUserService implements UserService {
  private usersData: User[] = [
    {
      id: 1,
      full_name: 'Андрей',
      birth_date: '18.05.2001',
      balance: 10000000,
      visits_quantity: 10, // кол-во посещений
      visits_available: 5, // посещения доступны
      photo: null,
    },
  ];

  public getUser(id: number): Observable<User | undefined> {
    return new Observable((subscriber) => {
      const findUser = this.usersData.find((user) => user.id === id);
      subscriber.next(findUser);
    });
  }

  public getUsers(): Observable<User[]> {
    return new Observable((subscriber) => {
      subscriber.next(this.usersData);
    });
  }

  public createUser(user: User): Observable<User[]> {
    this.usersData.push(user);
    return new Observable((subscriber) => {
      subscriber.next(this.usersData);
    });
  }

  public updateUser(user: User): Observable<User[]> {
    const indexUser = this.usersData.findIndex((index) => index.id === user.id);
    if (indexUser !== -1) {
      this.usersData[indexUser] = user;
    }
    return new Observable((subscriber) => {
      subscriber.next(this.usersData);
    });
  }

  public deleteUser(id: number): Observable<User[]> {
    this.usersData = this.usersData.filter((item) => item.id !== id);
    return new Observable((subscriber) => {
      subscriber.next(this.usersData);
    });
  }
}
