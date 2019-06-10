import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  host: {
    '[class]': '\'todo-list\'',
  },
})
export class TodoListComponent {
  @Input()
  todos: TodoItem[];

  showCompleted = false;

  get filteredTodos() {
    if (this.showCompleted) {
      return this.todos;
    }

    return this.todos.filter(todo => !todo.done);
  }

  toggleCompleted() {
    this.showCompleted = !this.showCompleted;
  }

  toggleTodo(todo: TodoItem): void {
    const todoItem = this.todos.find(item => todo.text === item.text);
    todoItem.done = todo.done;
  }
}
