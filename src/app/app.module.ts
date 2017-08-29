import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddTodoItemComponent } from './add-todo-item/add-todo-item.component';
import { SmartAddTodoItemComponent } from './add-todo-item/smart-add-todo-item.component';
import { TodoComponent } from './todo/todo.component';
import { ToDoService } from './todo/todo.service';
import { Routes, RouterModule } from '@angular/router';
import { TodosListComponent } from './todos-list/todos-list.component';
import { SmartTodoListComponent } from './todos-list/smart-todo-list.component';
import { EditTodoItemComponent } from './edit-todo-item/edit-todo-item.component';
import { SmartEditTodoItemComponent } from './edit-todo-item/smart-edit-todo-item.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { SmartTodoItemComponent } from './todo-item/smart-todo-item.component';
export const ROUTES: Routes = [
  { path: '', component: AppComponent },
  { path: 'todos', component: SmartTodoListComponent },
  { path: 'todos/add', component: SmartAddTodoItemComponent },
  { path: 'todos/:id/edit', component: SmartEditTodoItemComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AddTodoItemComponent,
    TodoComponent,
    TodosListComponent,
    SmartAddTodoItemComponent,
    SmartTodoListComponent,
    EditTodoItemComponent,
    SmartEditTodoItemComponent,
    TodoItemComponent,
    SmartTodoItemComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
