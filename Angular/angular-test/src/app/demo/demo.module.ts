import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [DemoComponent]
})
export class DemoModule { }
