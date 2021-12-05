import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styles: [
  ]
})
export class PersonComponent implements OnInit {

  @Input() name: string = ""
  @Input() age: string = ""

  @Output() sendData = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClick () {
    this.sendData.emit("我是子")
  }

}
