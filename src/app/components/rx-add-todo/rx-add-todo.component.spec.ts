import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxAddTodoComponent } from './rx-add-todo.component';

describe('RxAddTodoComponent', () => {
  let component: RxAddTodoComponent;
  let fixture: ComponentFixture<RxAddTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxAddTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxAddTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
