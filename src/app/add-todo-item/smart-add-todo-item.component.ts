import { Component } from '@angular/core';
import { ToDoService } from '../todo/todo.service';

@Component({
  selector: 'app-smart-add-todo',
  templateUrl: './smart-add-todo-item.component.html',
  styleUrls: []
})
export class SmartAddTodoItemComponent {
  defaultTodo = { title: '' };
  constructor(private toDoService: ToDoService) {}
  onAddTodo(title: { title: string }) {
    this.toDoService.addToDo({ title: title.title });
  }
}
