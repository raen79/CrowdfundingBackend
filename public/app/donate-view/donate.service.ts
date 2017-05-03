import { Injectable } from '@angular/core';

import { Donation } from '../_models/donation';
import { Http, Response, RequestOptions } from '@angular/http';
import { GlobalVariable } from '../_common/global';
import { Observable } from 'rxjs';
import { contentHeaders } from '../_common/headers';
import 'rxjs/add/operator/map'

@Injectable()
export class DonateService {

  constructor(private http: Http) { }

  donate(donation: Donation): Observable<boolean> {
  	let options = new RequestOptions({ headers: contentHeaders() });

  	return this.http.put(GlobalVariable.BASE_URL + 'api/transaction', JSON.stringify(donation),options)
  		.map((response: Response) => {
    			if ("token" in response.json()){
                    let email = JSON.parse(localStorage.getItem('currentUser')).email;
                    let token = response.json().token;
                    localStorage.setItem('currentUser', JSON.stringify({email: email, token: token}));

                    return true;
  			}
  			else{
  				return false;
  			}
  		});
  }

}
