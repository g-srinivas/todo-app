import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDoItem } from '../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() item: ToDoItem = new ToDoItem({ id: 0, title: '', complete: false });
  @Output()
  tootleToDoItem = new EventEmitter<{ id: number; complete: boolean }>();

  @Output() removeToDoItem = new EventEmitter<number>();

  onChange(id: number, $event: any) {
    this.tootleToDoItem.emit({ id: id, complete: $event.target.checked });
  }

  onDelete(id: number) {
    this.removeToDoItem.emit(id);
  }
}
