import { Injectable } from '@angular/core';

import { Card } from '../_models/card';
import { Http, Headers, Response, URLSearchParams, RequestOptions } from '@angular/http';
import { GlobalVariable } from '../_common/global';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class CardService {

	constructor(private http: Http) { }

	getCards(amount: number, sort: string, filter: string, page: number): Observable<Card[]> {
		let params: URLSearchParams = new URLSearchParams();
		params.set('page', page.toString());
		params.set('page_size', amount.toString());
		params.set('sort', sort);
		params.set('filter', filter);

		let requestOptions = new RequestOptions();
		requestOptions.search = params;

		return this.http.get(GlobalVariable.BASE_URL + 'api/project', requestOptions)
			.map((response: Response) => {
				return response.json().project;
			});
	}

}
