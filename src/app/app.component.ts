import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoStoreService } from './todo-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private todos: Todo[];

  constructor (private todoStore: TodoStoreService) {}

  ngOnInit(): void {
    this.todos = this.todoStore.list;
  }

}
