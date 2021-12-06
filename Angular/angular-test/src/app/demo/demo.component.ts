import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TestService } from '../test.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styles: [
  ]
})
export class DemoComponent implements OnInit {

  constructor(public testService: TestService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
  }

}
