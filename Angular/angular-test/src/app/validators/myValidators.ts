import { AbstractControl, ValidationErrors } from "@angular/forms";

export class MyValidators {
  static cannotContainSpace (control: AbstractControl): ValidationErrors | null {
    if (/\s/.test(control.value)) {
      return {
        cannotContainSpace: true
      }
    }
    return null
  }

  static shouldBeUnique (control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise(function (resolve) {
      setTimeout(function () {
        if (control.value === 'admin') {
          resolve({shouldBeUnique: true})
        } else {
          resolve(null)
        }
      }, 1000)
    })
  }
}