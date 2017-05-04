import { Injectable } from '@angular/core';

import { Update } from '../_models/update';
import { Http, Response } from '@angular/http';
import { GlobalVariable } from '../_common/global';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class UpdateService {

  constructor(private http: Http) { }

   getUpdate(id: number): Observable<Update> {
   	return this.http.get(GlobalVariable.BASE_URL + 'api/update/' + id)
   		.map((update: Response) => {
   			return update.json();
   		});
   }

}
