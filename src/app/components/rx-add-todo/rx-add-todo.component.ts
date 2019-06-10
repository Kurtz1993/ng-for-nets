import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject, SubscriptionLike } from 'rxjs';
import { debounceTime, map, filter } from 'rxjs/operators';

import { TodoItem } from 'src/app/models/todo.model';

@Component({
  selector: 'app-rx-add-todo',
  templateUrl: './rx-add-todo.component.html',
  styleUrls: ['./rx-add-todo.component.scss'],
})
export class RxAddTodoComponent implements OnInit, OnDestroy {
  @Output()
  create = new EventEmitter<TodoItem>();
  todoText: string;
  userInput$ = new Subject<string>();

  private userInputSub: SubscriptionLike;

  ngOnInit() {
    this.userInputSub = this.userInput$
      .pipe(
        debounceTime(500),
        filter(value => !!value),
        map(value => value)
      )
      .subscribe(val => {
        this.create.emit({ text: val, done: false });
      });
  }

  ngOnDestroy() {
    this.userInputSub.unsubscribe();
  }
}
