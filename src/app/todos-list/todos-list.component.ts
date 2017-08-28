import { Component, Input } from '@angular/core';
import { ToDoItem } from '../todo';
@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent {
  @Input() todos: Array<ToDoItem> = [];

  constructor() {}
}
