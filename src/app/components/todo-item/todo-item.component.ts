import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input()
  todo: TodoItem;

  @Output()
  toggleComplete = new EventEmitter<TodoItem>();

  toggleDone(): void {
    this.toggleComplete.emit({ ...this.todo, done: !this.todo.done });
  }
}
