import { Component,computed,signal,Input } from '@angular/core';

// const randomUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  // selectedUser = signal(randomUser);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
  }
  
}
