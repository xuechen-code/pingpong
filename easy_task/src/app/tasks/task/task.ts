import { Component, EventEmitter, inject, input, Input, Output } from '@angular/core';
import { userTask } from './task.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';



@Component({
  selector: 'app-task',
  imports: [Card,DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({required:true}) task!: userTask;

  private tasksService = inject(TasksService)


onCompleteTask() {
  this.tasksService.removeTask(this.task.id)
}

}
