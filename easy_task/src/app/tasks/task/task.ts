import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { userTask } from './task.model';



@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({required:true}) task!: userTask;
  @Output() complete = new EventEmitter<string>()

onCompleteTask() {
  this.complete.emit(this.task.id)
}

}
