import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

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

  username: string = 'long'

  paragraph: string = 'xxx'
  list: List[] = [
    {
      id: 1, name: '张'
    },
    {
      id: 2, name: '三'
    },
  ]

  // @ViewChild("paragraph") paragraph: ElementRef<HTMLParagraphElement> | undefined

  // @ViewChildren("list") list: QueryList<HTMLLIElement>  | undefined
  ngAfterViewInit () {
    // console.log(this.paragraph?.nativeElement)
    // console.log(this.list?.toArray())
  }

  setData() {
    this.username = 'hello'
  }

  getData(event: any) {
    window.alert(event)
  }

  inentify (index: number, item: List) {

  }

}
