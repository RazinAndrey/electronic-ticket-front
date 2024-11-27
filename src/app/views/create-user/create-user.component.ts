import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user-service/user.service';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
})
export class CreateUserComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}
}
