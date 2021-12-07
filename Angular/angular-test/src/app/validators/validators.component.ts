import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from './myValidators';

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styles: [
  ]
})
export class ValidatorsComponent implements OnInit {

  constructor() { }

  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      MyValidators.cannotContainSpace
    ], MyValidators.shouldBeUnique)
  })

  get name() {
    console.log(this.contactForm.get('name'))
    return this.contactForm.get('name') as FormControl
  }

  onSubmit() {
    this.name
    console.log(this.contactForm.valid)
  }

  ngOnInit(): void {
  }


}
