import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ToDoService } from '../todo/todo.service';

@Component({
  selector: 'app-smart-todo-list',
  templateUrl: './smart-todo-list.component.html',
  styleUrls: []
})
export class SmartTodoListComponent {
  constructor(private toDoService: ToDoService) {
    console.log(this.toDoService.getToDos());
  }
  todos = this.toDoService.getToDos();
}
