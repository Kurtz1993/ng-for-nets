import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { RxAddTodoComponent } from './rx-add-todo.component';
import { TodoItem } from 'src/app/models/todo.model';

describe('RxAddTodoComponent', () => {
  let component: RxAddTodoComponent;
  let fixture: ComponentFixture<RxAddTodoComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RxAddTodoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxAddTodoComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not emit a todo, when the input is empty', fakeAsync(() => {
    const input = element.query(By.css('input'));
    const createSpy = spyOn(component.create, 'emit');
    input.triggerEventHandler('input', {
      target: {
        value: '',
      },
    });

    fixture.detectChanges();
    tick(500);

    expect(createSpy).not.toHaveBeenCalled();
  }));

  it('should emit a todo, when the input is not empty', async(() => {
    const input = element.query(By.css('input'));
    const createSpy = spyOn(component.create, 'emit').and.callThrough();
    const todoText = 'Create unit tests';
    input.triggerEventHandler('input', {
      target: {
        value: todoText,
      },
    });

    fixture.detectChanges();


    component.create.subscribe((todo: TodoItem) => {
      expect(createSpy).toHaveBeenCalled();
      expect(todo.text).toBe(todoText);
      expect(todo.done).toBe(false);
    });
  }));
});
