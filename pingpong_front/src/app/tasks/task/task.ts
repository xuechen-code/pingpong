import { Component, input, Input } from '@angular/core';
import { userTask } from './task.model';



@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({required:true}) taks!: userTask;
}
