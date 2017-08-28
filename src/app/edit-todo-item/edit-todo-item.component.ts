import { Component, Input } from '@angular/core';
import { ToDoItem } from '../todo';

@Component({
  selector: 'app-edit-todo-item',
  templateUrl: './edit-todo-item.component.html',
  styleUrls: ['./edit-todo-item.component.css']
})
export class EditTodoItemComponent {
  @Input()
  item: ToDoItem = new ToDoItem({ id: 0, title: 'ffffff', complete: false });
}
