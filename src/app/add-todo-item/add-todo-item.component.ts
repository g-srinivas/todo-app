import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css']
})
export class AddTodoItemComponent {
  @Input() todo = { title: '' };
  @Output() addTodoItem = new EventEmitter<{ title: string }>();

  onSubmit({ value, valid }: { value: { title: string }; valid: boolean }) {
    this.addTodoItem.emit({ title: value.title });
    this.todo.title = '';
  }
}
