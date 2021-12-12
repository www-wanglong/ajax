import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TestService } from './test.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Store } from '@ngrx/store'
import { AppState } from './store';
import { decrement, increment, async_increment } from './store/actions/counter.actions'
interface List {
  id: number,
  name: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})


export class AppComponent {

  constructor (private store: Store<AppState>) {
    // this.count = this.store.pipe(select)
  }

  increment () {
    this.store.dispatch(increment())
  }



  decrement () {
    this.store.dispatch(decrement())
  }

  async_increment () {
    this.store.dispatch(async_increment())
  }


  // contactForm: FormGroup = new FormGroup({
  //   username: new FormControl(),
  //   phone: new FormControl()
  // })

  // username: string = 'long'

  // paragraph: string = 'xxx'
  // list: List[] = [
  //   {
  //     id: 1, name: '张'
  //   },
  //   {
  //     id: 2, name: '三'
  //   },
  // ]

  // constructor (private http: HttpClient) {

  // }

  // ngOnInit(): void {
  //   let params = new HttpParams({
  //     fromObject: { age: '20' }
  //   })
  //   let headers = new HttpHeaders({
  //     test: 'meibe'
  //   })
  //   params = params.append('sex', 'female')
  //   this.http.get(
  //     'https://jsonplaceholder1.typicode.com/users',
  //     {
  //       observe: 'response',
  //       params,
  //       headers
  //     }
  //     ).subscribe(console.log)
  // }

  // // @ViewChild("paragraph") paragraph: ElementRef<HTMLParagraphElement> | undefined

  // // @ViewChildren("list") list: QueryList<HTMLLIElement>  | undefined
  // ngAfterViewInit () {
  //   // console.log(this.paragraph?.nativeElement)
  //   // console.log(this.list?.toArray())
  // }

  // setData() {
  //   this.username = 'hello'
  // }

  // getData(event: any) {
  //   window.alert(event)
  // }

  // inentify (index: number, item: List) {

  // }

  // change () {
  //   this.username = 'lisi'
  // }

}
