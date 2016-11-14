import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoStoreService } from '../todo-store.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  private todo: Todo;
  private todos: Todo[];

  constructor(private todoStore: TodoStoreService) { }

  ngOnInit(): void {
    this.todo = new Todo;
    this.todos = this.todoStore.list;
  }

  public onDelete(index: number): void {
    this.todoStore.onDelete(index);
  }

}
