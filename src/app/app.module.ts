import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoItemComponent, TodoListComponent, AddTodoComponent } from './components';

@NgModule({
  declarations: [AppComponent, TodoItemComponent, TodoListComponent, AddTodoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
