import { Injectable } from '@angular/core';

import { Project } from '../_models/project';
import { Http, Response, RequestOptions } from '@angular/http';
import { GlobalVariable } from '../_common/global';
import { contentHeaders } from '../_common/headers';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class ProjectViewService {

	constructor(private http: Http) { }

	getProject(id: number): Observable<Project> {
		let options = new RequestOptions({ headers: contentHeaders() });

  		return this.http.get(GlobalVariable.BASE_URL + 'api/project/' + id, options)
  			.map((project: Response) => {
  					return project.json();
  				}
  			);
	}

}