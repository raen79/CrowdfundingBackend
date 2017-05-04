import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { contentHeaders } from '../_common/headers';
import { GlobalVariable } from '../_common/global';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../_models/user';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthenticationService {
    public token: string;
    public isLoginSubject = new BehaviorSubject<boolean>(this.tokenExists());
 
    constructor(private http: Http, public router: Router) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    isLoggedIn(): Observable<boolean>{
        return this.isLoginSubject.asObservable();
    }

    login(user: User): Observable<boolean> {
        let options = new RequestOptions({ headers: contentHeaders() });

        return this.http.post(GlobalVariable.BASE_URL + 'api/authentication', JSON.stringify(user), options)
            .map((response: Response) => {
                let token = response.json() && response.json().token;

                if (token) {
                    this.token = token;

                    localStorage.setItem('currentUser', JSON.stringify({ email: user.email, token: token }));

                    this.isLoginSubject.next(true);
                    return true;
                } 

                else {
                    return false;
                }
            });
    }
 
    logout(): void {
        this.token = null;

        this.isLoginSubject.next(false);
        localStorage.removeItem('currentUser');
        this.router.navigate(['/']);
    }

    tokenExists(): boolean {
        return localStorage.getItem('currentUser') != null;
    }
}