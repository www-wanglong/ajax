import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent implements OnInit, OnInit, AfterContentInit, AfterViewInit {

  @Input("name") name: string = ''
  @ContentChild("box") box: ElementRef<HTMLDivElement> | undefined
  @ViewChildren("p") p: ElementRef<HTMLParagraphElement> | undefined
  constructor(private test: TestService) {
    console.log(this.test)
    console.log(this.name)
    //console.log('constructor')
  }

  ngOnInit(): void {
    console.log(this.name)
    //console.log('ngOnInit')
    console.log(this.box)
  }

  ngAfterContentInit(): void {
    //console.log('ngAfterContentInit')
    //console.log(this.box)
    console.log(this.p)
  }

  ngAfterViewInit(): void { //试图初始化完成
    //console.log('ngAfterViewInit')
    console.log(this.p)
  }

}
