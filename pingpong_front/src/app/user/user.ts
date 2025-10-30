import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  selectedUser = randomUser
}
