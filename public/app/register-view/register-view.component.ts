import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../_models/user';
import { RegistrationService } from '../_services/registration.service'

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit {

  private error = {subject: "", message: ""};

  constructor(public router: Router, private route: ActivatedRoute, private user: User, private registrationService: RegistrationService) { }

  register(form) {
    this.error = {subject: "", message: ""};

    this.registrationService.register(this.user)
      .subscribe(
        result =>  {
          form.reset();
          this.redirect();
        },
        error => {
          let jsonCause = JSON.parse(error._body).cause;
          let jsonError = JSON.parse(error._body).error;

          if (jsonError == "notmatching"){
            this.error.subject = "password_confirmation";
            this.error.message = "This value does not match the password";
          }

          else if (jsonError == "notpresent"){
            this.error.subject = jsonCause;
            this.error.message = "This field cannot be empty";
          }

          else if (jsonError == "exists"){
            this.error.subject = "email";
            this.error.message = "This email address exists already";
          }

          else if (jsonError == "format"){
            if (jsonCause == "email"){
              this.error.subject = "email";
              this.error.message = "This is not a valid email format";
            }
            else{
              this.error.subject = jsonCause;
              this.error.message = "This is not a valid name";
            }
          }

          else if (jsonError == "length"){
            this.error.subject = jsonCause;
            this.error.message = "Password must be longer than 8 character";
          }
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