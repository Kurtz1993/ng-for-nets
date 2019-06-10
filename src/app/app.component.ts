import { Component, ElementRef } from '@angular/core';
import { TodoItem } from './models/todo.model';
import { TodoService } from './services/todos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngx-todo';

  todos: Observable<TodoItem[]>;

  constructor(private todoService: TodoService, private elm: ElementRef) {}

  ngOnInit() {
    this.todos = this.todoService.todos$.asObservable();
    console.log(this.elm);
  }

  addTodo(todo: TodoItem) {
    this.todoService.addTodo(todo);
  }
}
