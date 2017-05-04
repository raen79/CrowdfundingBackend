import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from '../_services/index';
import { User } from '../_models/user';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})

export class LoginViewComponent implements OnInit {
  error = {subject: "", message: ""};

  constructor(private router: Router, private route: ActivatedRoute, public authenticationService: AuthenticationService, private user: User) { }

  login(form: any) {
    this.error = {subject: "", message: ""};

    this.authenticationService.login(this.user)
      .subscribe(result =>  {
          if (result === true){
            form.reset();
            this.redirect();
          }
        },
        error => {
          let cause = JSON.parse(error._body).cause;
          this.error.subject = cause;
          this.error.message = "The " + cause + " you have entered is incorrect!";
        }
      );
  }

  redirect() {
    this.route.queryParams.subscribe((params: Params) => this.router.navigateByUrl(params['returnUrl']));
  }

  ngOnInit() {
    if (localStorage.getItem('currentUser') != null){
      this.redirect();
    }
  }
  
}