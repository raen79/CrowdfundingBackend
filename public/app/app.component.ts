import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Barbelo';
  loggedIn : Observable<boolean>;
  
  constructor(public router: Router, public authenticationService: AuthenticationService) {
  	this.loggedIn = authenticationService.isLoggedIn();
  }

  login(){
    this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url }});
  }

  register(){
    this.router.navigate(['/register'], { queryParams: { returnUrl: this.router.url }});
  }

  logout(){
  	this.authenticationService.logout();
  }

}
