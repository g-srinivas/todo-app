import { Injectable } from '@angular/core';
import { OrderedMap } from 'immutable';
import { ToDoItem } from '../todo';

@Injectable()
export class ToDoService {
  todos = OrderedMap<number, ToDoItem>();

  getNextId() {
    return this.todos.count() + 1;
  }
  getToDos() {
    return this.todos.toArray();
  }

  getToDoById(id: number) {
    console.log(this.todos.get(id));
    return this.todos.get(id);
  }

  addToDo(todo: { title: string }) {
    this.todos = this.todos.set(
      this.getNextId(),
      new ToDoItem({ id: this.getNextId(), title: todo.title, complete: false })
    );
  }
}
