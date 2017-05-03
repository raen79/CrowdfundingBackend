import { Injectable } from '@angular/core';

import { Project } from '../_models/project';
import { Http, Response, RequestOptions } from '@angular/http';
import { GlobalVariable } from '../_common/global';
import { Observable } from 'rxjs';
import { contentHeaders } from '../_common/headers';
import 'rxjs/add/operator/map'

@Injectable()
export class ProjectFormService {

  constructor(private http: Http) { }

  new(project: Project): Observable<number> {
    	let options = new RequestOptions({ headers: contentHeaders() });

  	return this.http.put(GlobalVariable.BASE_URL + 'api/project', JSON.stringify(project),options)
  		.map((response: Response) => {
  			return this.respond(response);
  		});
  }

  update(project: Project): Observable<number> {
  	let options = new RequestOptions({ headers: contentHeaders() });

  	return this.http.patch(GlobalVariable.BASE_URL + 'api/project', JSON.stringify(project),options)
  		.map((response: Response) => {
  			return this.respond(response);
  		});
  }

  private respond(response: Response): number{
	let email = JSON.parse(localStorage.getItem('currentUser')).email;
	let token = response.json().token;
	localStorage.setItem('currentUser', JSON.stringify({email: email, token: token}));
	return response.json().id;
  }
}
