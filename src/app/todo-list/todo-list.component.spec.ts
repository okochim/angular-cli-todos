/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

import { TodoListComponent } from './todo-list.component';
import { TodoStoreService } from '../todo-store.service';

@Component({selector: 'app-todo-detail', template: '<p>app-todo-detail</p>'})
export class TodoDetailStubComponent { }

describe('Component: TodoList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [
        TodoListComponent,
        TodoDetailStubComponent
      ],
      providers: [
        TodoStoreService
      ]
    });
  });
  // it('should create an instance', () => {
  //   let fixture = TestBed.createComponent(TodoListComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });

});
