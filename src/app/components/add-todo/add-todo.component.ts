import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoItem } from 'src/app/models/todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  @Output()
  create = new EventEmitter<TodoItem>();

  constructor() {}

  ngOnInit() {}

  addTodo(event: KeyboardEvent): void {
    if (event.keyCode !== 13) { return; }
    const textInput = event.target as HTMLInputElement;

    this.create.emit({ text: textInput.value, done: false });

    textInput.value = '';
  }
}
