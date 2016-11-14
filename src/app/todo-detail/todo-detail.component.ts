import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Todo } from '../todo';
import { TodoStoreService } from '../todo-store.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  @Input('todo-data') private todo: Todo;
  @Input('number') private i: number;
  @Output('delete') private delete = new EventEmitter();

  constructor(private todoStore: TodoStoreService) { }

  ngOnInit() {
  }

  public onDelete($event: any): void {
    this.delete.emit($event);
  }

}
