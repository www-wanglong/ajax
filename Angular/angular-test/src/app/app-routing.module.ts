import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NewsComponent } from './pages/news/news.component';
import { CompanyComponent } from './pages/company/company.component';
import { IndustryComponent } from './pages/industry/industry.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about/:name',
    component: AboutComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'news',
    component: NewsComponent,
    children: [
      {
        path: 'company',
        component: CompanyComponent,
        outlet: 'left'
      },
      {
        path: 'industry',
        component: IndustryComponent,
        outlet: 'right'
      }
    ]
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => {
      console.log(m)
      return m.UserModule
    })
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
