import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../shared/services/user-service/user.service';
import { MockUserService } from '../../shared/services/user-service/implementations/mock-user.service';
import { User } from '../../shared/models/user.model';
import { TextInputComponent } from '../../shared/components/text-input/text-input.component';
import { FileInputComponent } from '../../shared/components/file-input/file-input.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    TextInputComponent,
    FileInputComponent,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  providers: [{ provide: UserService, useClass: MockUserService }],
})
export class UsersComponent implements OnInit {
  protected users$!: Observable<User[]>;

  constructor(private readonly userService: UserService) {}

  public formUser = new FormGroup({
    full_name: new FormControl<string>(''),
    birth_date: new FormControl<string>(''),
    balance: new FormControl<number>(0),
    visits_quantity: new FormControl<number>(0),
    visits_available: new FormControl<number>(0),
    photo: new FormControl<File | null>(null),
  });

  public ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }

  public createUser(): void {
    const newUser: User = {
      id: Date.now(),
      full_name: this.formUser.value.full_name!,
      birth_date: this.formUser.value.birth_date!,
      balance: this.formUser.value.balance!,
      visits_quantity: this.formUser.value.visits_quantity!,
      visits_available: this.formUser.value.visits_available!,
      photo: this.formUser.value.photo ?? null,
    };
    this.users$ = this.userService.createUser(newUser);
    this.formUser.reset();
  }

  public updateUser(user: User): void {
    this.users$ = this.userService.updateUser(user);
  }

  public deleteUser(id: number): void {
    this.users$ = this.userService.deleteUser(id);
  }
}
