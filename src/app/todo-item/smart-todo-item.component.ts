import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDoItem } from '../todo';
import { ToDoService } from '../todo/todo.service';

@Component({
  selector: 'app-smart-todo-item',
  templateUrl: './smart-todo-item.component.html',
  styleUrls: []
})
export class SmartTodoItemComponent {
  @Input() item: ToDoItem;
  @Output() reloadTodos = new EventEmitter<void>();

  constructor(private toDoService: ToDoService) {}

  onTootleToDoItem(todo: { id: number; complete: boolean }) {
    console.log(todo.id);
    this.toDoService.toogleToDoItem(todo);
  }

  onDelete(id: number) {
    this.toDoService.removeToDoItem(id);
    this.reloadTodos.emit();
  }
}
