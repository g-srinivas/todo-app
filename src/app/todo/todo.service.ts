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
    return this.todos.toList();
  }

  getToDoById(id: number) {
    return this.todos.get(id);
  }

  removeToDoItem(id: number) {
    this.todos = this.todos.remove(id);
  }

  toogleToDoItem(todo: { id: number; complete: boolean }) {
    const todoOriginal = this.getToDoById(todo.id);
    this.todos = this.todos.set(
      todo.id,
      new ToDoItem({
        id: todo.id,
        title: todoOriginal.title,
        complete: todo.complete
      })
    );
  }

  addToDo(todo: { title: string }) {
    this.todos = this.todos.set(
      this.getNextId(),
      new ToDoItem({ id: this.getNextId(), title: todo.title, complete: false })
    );
  }
}
