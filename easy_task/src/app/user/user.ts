import { Component,EventEmitter,Input,Output } from '@angular/core';
import { UserType } from './user.model';

// const randomUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  @Input() user!: UserType;
  @Input({required:true}) selected!: boolean;
  @Output() userSelected = new EventEmitter<string>();
  
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.userSelected.emit(this.user.id);
  }
  
}
