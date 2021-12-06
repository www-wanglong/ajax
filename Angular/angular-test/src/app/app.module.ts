import { NgModule, ReflectiveInjector } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DemoModule } from './demo/demo.module';

import { HoverDirective } from './directives/hover.directive';
import { SummaryPipe } from './pipes/summary.pipe';
import { PersonComponent } from './components/person/person.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HoverDirective,
    SummaryPipe,
    PersonComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    DemoModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

class MailService {

}

const injector = ReflectiveInjector.resolveAndCreate([
  {
    provide: MailService,
    useValue: {
      name: 'zhang'
    }
  }
])


const mailService1 = injector.get(MailService)
const mailService2 = injector.get(MailService)

console.log(mailService1)