import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store'
import { AppState } from './store';
import { filter, fromEvent, map } from 'rxjs';
import { addTodo, deleteTodo } from './store/actions/todo.actions';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
  // 定义动画
  animations: [
    trigger('slide', [
      // 入场动画
      transition('void => *', [
        style({opacity: 0, transform: 'translateY(40px)'}),
        animate(250, style({opacity: 1, transform: 'translateY(0)'}),)
      ]),
      // 出场动画
      transition('* => void', [
        animate('1000ms 1s ease-out', style({opacity: 0, transform: 'translateY(100%)'}),)
      ])
    ])
  ]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('AddTodoInput') AddTodoInput!: ElementRef
  constructor (private store: Store<AppState>) {

  }

  ngAfterViewInit(): void {
    fromEvent<KeyboardEvent>(this.AddTodoInput.nativeElement, 'keyup')
      .pipe(
        filter((event) => event.key === 'Enter'),
        map((event) => (<HTMLInputElement>event.target).value),
        map((title) => title.trim()),
        filter(title => title !== '')
      )
      .subscribe(title => {
        this.store.dispatch(addTodo({ title }))
        this.AddTodoInput.nativeElement.value = ''
      })
  }
}
