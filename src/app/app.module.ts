import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoItemComponent, TodoListComponent, AddTodoComponent } from './components';
import { RxAddTodoComponent } from './components/rx-add-todo/rx-add-todo.component';

@NgModule({
  declarations: [AppComponent, TodoItemComponent, TodoListComponent, AddTodoComponent, RxAddTodoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
