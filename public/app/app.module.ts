import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BaseRequestOptions } from '@angular/http';

import { AuthGuard } from './_guards/index';
import { RegistrationService, AuthenticationService } from './_services/index';
import { User } from './_models/user';

import { AppComponent } from './app.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { LandingViewComponent } from './landing-view/landing-view.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { CardComponent } from './card/card.component';
import { SliderComponent } from './slider/slider.component';
import { UpdateComponent, } from './update/update.component';
import { RegisterViewComponent } from './register-view/register-view.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { DonateViewComponent } from './donate-view/donate-view.component';
import { AboutViewComponent } from './about-view/about-view.component';
import { ModerationViewComponent } from './moderation-view/moderation-view.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    LandingViewComponent,
    ProjectViewComponent,
    SearchViewComponent,
    CardComponent,
    SliderComponent,
    UpdateComponent,
    RegisterViewComponent,
    ProjectFormComponent,
    DashboardViewComponent,
    DonateViewComponent,
    AboutViewComponent,
    ModerationViewComponent,
    DialogComponent
  ],
  entryComponents: [
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [ 
    AuthGuard,
    AuthenticationService,
    RegistrationService,
    BaseRequestOptions,
    User
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
