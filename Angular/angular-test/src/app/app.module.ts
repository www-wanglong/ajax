import { NgModule, ReflectiveInjector } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoModule } from './demo/demo.module';

import { HoverDirective } from './directives/hover.directive';
import { SummaryPipe } from './pipes/summary.pipe';
import { PersonComponent } from './components/person/person.component';
import { ChildComponent } from './child/child.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { ValidatorsComponent } from './validators/validators.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './pages/news/news.component';
import { CompanyComponent } from './pages/company/company.component';
import { IndustryComponent } from './pages/industry/industry.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HoverDirective,
    SummaryPipe,
    PersonComponent,
    ChildComponent,
    FormArrayComponent,
    ValidatorsComponent,
    FormBuilderComponent,
    CheckboxComponent,
    HomeComponent,
    AboutComponent,
    LayoutComponent,
    NavigationComponent,
    NewsComponent,
    CompanyComponent,
    IndustryComponent
  ],
  imports: [
    BrowserModule,
    DemoModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
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