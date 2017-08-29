import { Component, Input } from '@angular/core';
import { ToDoItem } from '../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent  {
  @Input()
  item: ToDoItem = new ToDoItem({ id: 0, title: 'ffffff', complete: false });

}
