import { Component, Input, OnInit } from '@angular/core';
import { ToDoItem } from '../todo';
import { ToDoService } from '../todo/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-smart-edit-todo-item',
  templateUrl: './smart-edit-todo-item.component.html',
  styleUrls: []
})
export class SmartEditTodoItemComponent implements OnInit {
  todoId: number;
  toDoItem: ToDoItem;
  constructor(
    private toDoService: ToDoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.todoId = Number.parseInt(params.id);
      this.toDoItem = this.toDoService.getToDoById(this.todoId);
    });
  }
}
