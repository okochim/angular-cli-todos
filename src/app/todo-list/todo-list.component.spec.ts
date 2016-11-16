/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement, Injectable, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { Todo } from '../todo';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoStoreService } from '../todo-store.service';
import { TodoStoreServiceStub } from '../todo-store.service.stub';

let mockTodo = new Todo;
mockTodo.title = 'aaa';
mockTodo.desc = 'bbb';

@Component({ selector: 'app-todo-detail', template: '<div>app-todo-detail</div>' })
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
        {provide: TodoStoreService, useClass: TodoStoreServiceStub}
      ]
    })
      .compileComponents();
  }));

  it('should create an instance', () => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should ngOnInit before', () => {
    let todoStore = new TodoStoreService();
    let todoList = new TodoListComponent(todoStore);
    let todo = new Todo;
    todo.title = 'testTitle';
    todo.desc = 'testDesc';
    todoStore.add(todo);
    todoList.ngOnInit();
    let todos = (<any>todoList).todos;
    expect(todos.length).toBe(1);
    expect(todos[0].title).toEqual('testTitle');
    expect(todos[0].desc).toEqual('testDesc');
  });

  it('should onDlete before', () => {
    let todoStore = new TodoStoreService();
    let todoList = new TodoListComponent(todoStore);
    let todo = new Todo;
    todo.title = 'testTitle1';
    todo.desc = 'testDesc1';
    todoStore.add(todo);
    todo = new Todo;
    todo.title = 'testTitle2';
    todo.desc = 'testDesc2';
    todoStore.add(todo);
    todo = new Todo;
    todo.title = 'testTitle3';
    todo.desc = 'testDesc3';
    todoStore.add(todo);
    todoList.onDelete(1);
    let todos = todoStore.list;
    expect(todos[0].title).toEqual('testTitle1');
    expect(todos[0].desc).toEqual('testDesc1');
    expect(todos[1].title).toEqual('testTitle3');
    expect(todos[1].desc).toEqual('testDesc3');
  });

});