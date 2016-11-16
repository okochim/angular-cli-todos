/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoDetailComponent } from './todo-detail.component';
import { TodoStoreService } from '../todo-store.service';
import { TodoStoreServiceStub } from '../todo-store.service.stub';

describe('Component: TodoDetail', () => {
  let component: TodoDetailComponent;
  let fixture: ComponentFixture<TodoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoDetailComponent
      ],
      imports: [
      ],
      providers: [
        {provide: TodoStoreService, useClass: TodoStoreServiceStub}
      ]
    })
      .compileComponents();
  }));

  it('should create an instance', () => {
    fixture = TestBed.createComponent(TodoDetailComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
