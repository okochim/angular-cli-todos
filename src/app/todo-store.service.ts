import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoStoreService {
  private todos: Todo[] = [];

  public add(todo: Todo): void {
    this.todos.push(todo);
  }

  public onDelete(index: number): void {
    this.todos.splice(index, 1);
  }

  public get list(): Todo[] {
    return this.todos;
  }

}
