import { Headers } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';

let headers = new Headers();
headers.append('Accept', 'application/json');
headers.append('Content-Type', 'application/json');

function addToken(): void{
	if (localStorage.getItem('currentUser') !== null){
		let token = JSON.parse(localStorage.getItem('currentUser')).token;

		if (headers.has('Token')){
			headers.set('Token', token);
		}
		else{
			headers.append('Token', token);
		}
	}
	else{
		if (headers.has('Token')){
			headers.delete('Token');
		}
	}
}

export function contentHeaders(): Headers{
	addToken();
	return headers;
}