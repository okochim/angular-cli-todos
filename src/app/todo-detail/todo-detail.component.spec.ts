/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement, Injectable, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { Todo } from '../todo';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoStoreService } from '../todo-store.service';

let mockTodo = new Todo;
mockTodo.title = 'aaa';
mockTodo.desc = 'bbb';

@Component({
  selector: 'app-todo-detail',
  template: '<div></div>'
})
class TodoDetailComponentWrapper {
  @Input('number')
  public i: number;
  @Input('todo-data')
  public todo: Todo;
}

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoListComponent,
        TodoDetailComponentWrapper
      ],
      imports: [
        FormsModule
      ],
      providers: [
        TodoStoreService
      ]
    })
      .compileComponents();
  }));

  it('should create', () => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

});