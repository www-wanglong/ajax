import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styles: [
  ]
})
export class FormArrayComponent implements OnInit {

  constructor() { }

  contactForm: FormGroup = new FormGroup({
    contacts: new FormArray([])
  })

  get contacts () {
    return this.contactForm.get('contacts') as FormArray
  }

  addContacts () {
    let myContacts: FormGroup = new FormGroup({
      address: new FormControl(),
      phone: new FormControl(),
      name: new FormControl(),
    })
    this.contacts.push(myContacts)
  }

  removeContact (index: number) {
    this.contacts.removeAt(index)
  }



  ngOnInit(): void {
    this.addContacts()
  }

  onSubmit () {
    console.log(this.contactForm.value)
  }

}
