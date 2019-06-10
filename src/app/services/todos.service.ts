import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { TodoItem } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos$ = new BehaviorSubject<TodoItem[]>([]);

  addTodo(todo: TodoItem) {
    this.todos$.next([...this.todos$.value, todo]);
  }
}
