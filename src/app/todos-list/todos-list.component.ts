import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ToDoItem } from '../todo';
import { List } from 'immutable';
@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent {
  @Input() todos: List<ToDoItem> = List<ToDoItem>();

  @Output() refreshToDos = new EventEmitter<void>();

  onRefresh() {
    this.refreshToDos.emit();
  }

  constructor() {}
}
