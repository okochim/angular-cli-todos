import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { TodoStoreService } from './todo-store.service';


@Injectable()
export class TodoStoreServiceStub extends TodoStoreService {
  todosMcok: Todo[] = [];
  public add(todo: Todo): void {
    let todoMock: Todo;
    todoMock.title = todo.title;
    todoMock.desc = todo.desc;
    this.todosMcok.push(todoMock);
  }
  public get list(): Todo[] {
    return this.todosMcok;
  }
}
