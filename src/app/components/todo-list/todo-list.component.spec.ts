import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { TodoItem } from 'src/app/models/todo.model';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TodoItemComponent } from '../todo-item/todo-item.component';

const todos: TodoItem[] = [
  { text: 'Todo 1', done: false },
  { text: 'Todo 2', done: false },
  { text: 'Todo 3', done: true },
  { text: 'Todo 4', done: false },
  { text: 'Todo 5', done: true },
];

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent, TodoItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    component.todos = todos;
    element = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render three todo items', () => {
    // Arrange
    const todoList = element.query(By.css('.todo-list'));

    // Act

    // Assert
    expect(todoList.children.length).toBe(3);
  });

  it('should change the text of the button to "Hide completed"', () => {
    const buttonShowHide = element.query(By.css('button'));
    expect(buttonShowHide.nativeElement.innerText).toBe('Show completed');

    buttonShowHide.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(buttonShowHide.nativeElement.innerText).toBe('Hide completed');
  });

  it('should show completed todo items', () => {
    const button = element.query(By.css('button'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    const todoList = element.query(By.css('.todo-list'));
    expect(todoList.children.length).toBe(todos.length);
  });

  it('should remove a todo item when it\'s toggled', () => {
    const firstTodo = element.query(By.directive(TodoItemComponent))
      .componentInstance as TodoItemComponent;

    firstTodo.toggleDone();

    fixture.detectChanges();
    const todoList = element.query(By.css('.todo-list'));
    expect(todoList.children.length).toBe(2);
    expect(firstTodo.todo.done).toBe(true);
  });
});
