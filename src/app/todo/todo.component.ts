import { Component } from '@angular/core';
import { ToDoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  // constructor(private toDoService: ToDoService) {}
  onAddTodo(title: { title: string }) {
    console.log('title');
    // this.toDoService.addToDo({ title });
  }
}
