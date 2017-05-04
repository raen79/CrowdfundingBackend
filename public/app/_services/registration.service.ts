import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { contentHeaders } from '../_common/headers';
import { AuthenticationService } from '../_services/index';
import { GlobalVariable } from '../_common/global';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import 'rxjs/add/operator/map'
 
@Injectable()
export class RegistrationService {
    public token: string;
 
    constructor(private http: Http, private authenticationService: AuthenticationService) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    register(user: User): Observable<boolean> {
        let options = new RequestOptions({ headers: contentHeaders() });

        return this.http.put(GlobalVariable.BASE_URL + 'api/authentication', JSON.stringify(user), options)
            .map((response: Response) => {
                let token = response.json() && response.json().token;

                if (token) {
                   this.token = token;

                    localStorage.setItem('currentUser', JSON.stringify({ email: user.email, token: token }));
                    this.authenticationService.isLoginSubject.next(true);

                    return true; 
                } 

                else {
                    return false;
                }
            });
    }
}