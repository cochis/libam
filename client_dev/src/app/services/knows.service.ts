import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from  'rxjs/Observable';
import { Knows } from '../models/knows';
import { Global } from './global';
 

@Injectable()
export class KnowsService {
	public url:string;

	constructor(
		private _http: HttpClient
	){
		this.url = Global.url; 
	}


	testService (){
		return 'Probando el servicio de angular';
	}

	saveKnows(knows: Knows): Observable<any>{
		let params = JSON.stringify(knows);
		let headers = new HttpHeaders().set('Content-Type','application/json');
		let slide = 'knows/';
		return this._http.post(this.url+slide+'registro-know',params,{headers:headers});
	}


	

}
