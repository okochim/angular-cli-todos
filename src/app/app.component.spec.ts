/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoStoreService } from './todo-store.service';

@Component({selector: 'app-todo-input', template: '<p>todo-input-selector</p>'})
export class TodoInputStubComponent { }

@Component({selector: 'app-todo-list', template: '<span>todo-list-selector</span>'})
export class TodoListStubComponent { }

@Component({selector: 'my-root', template: '<app-root></app-root>'})
export class TestAppComponent { }

describe('App: Todos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TodoInputStubComponent,
        TodoListStubComponent,
        TestAppComponent
      ],
      providers: [
        TodoStoreService
      ]
    });
  });

  it('can instantiate it', () => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.componentInstance;
    expect(app).not.toBeNull();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h2 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Todos');
  }));

  it('should render app-todo-input', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('todo-input-selector');
  }));

  it('should render app-todo-list', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('todo-list-selector');
  }));

  it('rendered AppComponent', async(() => {
    let fixture = TestBed.createComponent(TestAppComponent);
    let componentInstance = fixture.componentInstance;
    fixture.detectChanges();
    let myApp = fixture.debugElement.query(By.css('app-root')).nativeElement;
    console.log(myApp);
    fixture.autoDetectChanges();
    fixture.whenStable().then(() => {
      let myAppAfter = fixture.debugElement.query(By.css('app-root')).nativeElement;
      console.log(myAppAfter);
    })
  }));
});
