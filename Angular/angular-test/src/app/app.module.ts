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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NewsComponent } from './pages/news/news.component';
import { CompanyComponent } from './pages/company/company.component';
import { IndustryComponent } from './pages/industry/industry.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './auth.interceptor';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './store/effects/counter.effects';


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

    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([CounterEffects])
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
