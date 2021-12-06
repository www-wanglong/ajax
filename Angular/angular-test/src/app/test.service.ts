import { Injectable } from '@angular/core';
import { DemoModule } from './demo/demo.module';
@Injectable({
  providedIn: DemoModule
})

export class TestService {
  test = 'test'
}
