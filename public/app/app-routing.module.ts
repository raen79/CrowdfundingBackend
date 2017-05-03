import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_guards/index';

import { LandingViewComponent } from './landing-view/landing-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { RegisterViewComponent } from './register-view/register-view.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { DonateViewComponent } from './donate-view/donate-view.component';
import { AboutViewComponent } from './about-view/about-view.component';
import { ModerationViewComponent } from './moderation-view/moderation-view.component';


const routes: Routes = [
  { path: '',  component: LandingViewComponent },
  { path: 'login',  component: LoginViewComponent },
  { path: 'register',  component: RegisterViewComponent },
  { path: 'project/:id',  component: ProjectViewComponent },
  { path: 'create/project', component: ProjectFormComponent, canActivate: [AuthGuard], data: {route: 'create/project'}},
  { path: 'search', component: SearchViewComponent},
  { path: 'dashboard', component: DashboardViewComponent},
  { path: 'donate/:id', component: DonateViewComponent, canActivate: [AuthGuard], data: {route: 'donate'}},
  { path: 'about', component: AboutViewComponent},
  { path: 'moderation', component: ModerationViewComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
