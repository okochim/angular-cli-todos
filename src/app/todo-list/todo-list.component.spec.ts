/* tslint:disable:no-unused-variable */
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

// import { Todo } from '../todo';
import { TodoInputComponent } from '../todo-input/todo-input.component';
import { TodoStoreService } from '../todo-store.service';

describe('Component: TodoInput', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [
        TodoInputComponent
      ],
      providers: [
        TodoStoreService
     ]
    });
  });
  it('should create an instance', () => {
    let fixture = TestBed.createComponent(TodoInputComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});