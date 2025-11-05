import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from "./new-task/new-task";
import { TasksService } from './tasks.service';

type UserType = {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input() user!: UserType;
  isAddingTask = false;

  constructor( private taskService: TasksService){}


  get selectedUserTasks(){
    return this.taskService.getUserTasks(this.user.id)
  }

  onCompleetTask(id: string){
    this.taskService.removeTask(id)
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }
}
