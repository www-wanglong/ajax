import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

interface Data {
  name: string
  value: string
}

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styles: [
  ]
})
export class CheckboxComponent implements OnInit {

  Data: Array<Data> = [
    { name: 'Pear', value: 'pear' },
    { name: 'Plum', value: 'plum' },
  ]

  form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: this.fb.control(''),
      checkArray: this.fb.array([]),
      gender: this.fb.control('male')
    })
   }

  onSubmit() {
    console.log('onSubmit', this.form.value)
  }

  onPatchValue() {
    this.form.patchValue({
      gender: 'female'
    })
  }

  onReset() {
    this.form.reset()
  }

  onChange(event: Event) {
    const target = event.target as HTMLInputElement
    const value = target.value
    const checked = target.checked
    const checkArray = this.form.get('checkArray') as FormArray
    if (checked) { // 选中
      checkArray.push(this.fb.control(value))
    } else {
      const index = checkArray.controls.findIndex((control) => control.value === value)
      checkArray.removeAt(index)
    }
  }

  ngOnInit(): void {
    this.form.get('gender')?.valueChanges.subscribe(value => {
      console.log(value)
    })
  }

}
