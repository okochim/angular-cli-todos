/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TodoInputComponent } from './todo-input.component';
import { TodoStoreService } from '../todo-store.service';
import { TodoStoreServiceStub } from '../todo-store.service.stub';
import { Todo } from '../todo';


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
        {provide: TodoStoreService, useClass: TodoStoreServiceStub}
     ]
    });
  });
  it('should create an instance', () => {
    let fixture = TestBed.createComponent(TodoInputComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should form button active', () => {
    let fixture = TestBed.createComponent(TodoInputComponent);
    let element = fixture.debugElement.nativeElement;
    let inputElement = fixture.debugElement.query(By.css('input[name=title]')).nativeElement;
    let textareaElement = fixture.debugElement.query(By.css('textarea[name=desc]')).nativeElement;
    let buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(buttonElement.disabled).toBeFalsy();
    });
  });

  it('should form button Inactive', () => {
    let fixture = TestBed.createComponent(TodoInputComponent);
    let inputElement = fixture.debugElement.query(By.css('input[name=title]')).nativeElement;
    inputElement.value = "inputTitle";
    inputElement.dispatchEvent(new Event('input'));
    let textareaElement = fixture.debugElement.query(By.css('textarea[name=desc]')).nativeElement;
    textareaElement.value = "inputDesc";
    textareaElement.dispatchEvent(new Event('textarea'));
    let buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    buttonElement.dispatchEvent(new Event('button'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(buttonElement.disabled).toBeTruthy();
    });
  });

  it('should NOT have todo before ngOnInit', () => {
    let todoStore: TodoStoreService;
    let todoinput = new TodoInputComponent(todoStore);
    (<any>todoinput).ngOnInit();
    expect((<any>todoinput).todo).toEqual(new Todo());
  });

  it('should have todo before onSubmit', () => {
    let todoStore = new TodoStoreService();
    let todoinput = new TodoInputComponent(todoStore);
    let todo = new Todo;
    todo.title = 'testTitle';
    todo.desc = 'testDesc';
    (<any>todoinput).todo = todo;
    (<any>todoinput).onSubmit();
    expect((<any>todoinput).todo).toEqual(new Todo());
    let todos = todoStore.list;
    expect(todos.length).toBe(1);
    expect(todos[0].title).toEqual('testTitle');
    expect(todos[0].desc).toEqual('testDesc');
  });
});
