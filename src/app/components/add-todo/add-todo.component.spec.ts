import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoComponent } from './add-todo.component';
import { TodoItem } from 'src/app/models/todo.model';

describe('AddTodoComponent', () => {
  let component: AddTodoComponent;
  let fixture: ComponentFixture<AddTodoComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddTodoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not emit the todo item', () => {
    const input = element.query(By.css('input'));
    const eventEmitterSpy = spyOn(component.create, 'emit');
    input.triggerEventHandler('keydown', { keyCode: 20 });

    fixture.detectChanges();

    expect(eventEmitterSpy).not.toHaveBeenCalled();
  });

  it('should create the todo item correctly', () => {
    const input = element.query(By.css('input'));
    const eventEmitterSpy = spyOn(component.create, 'emit').and.callThrough();
    const todoText = 'Create unit tests';

    input.triggerEventHandler('keydown', {
      keyCode: 13,
      target: {
        value: todoText,
      },
    });

    fixture.detectChanges();

    expect(eventEmitterSpy).toHaveBeenCalled();

    component.create.subscribe((todoItem: TodoItem) => {
      expect(todoItem.text).toBe(todoText);
      expect(todoItem.done).toBeFalsy();
      expect(input.nativeElement.value).toBe("");
    });
  });
});
