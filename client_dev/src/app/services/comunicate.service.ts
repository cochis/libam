import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from  'rxjs/Observable';
import { Comunicate } from '../models/comunicate';
import { Global } from './global';
 

@Injectable()
export class ComunicateService {
	public url:string;

	constructor(
		private _http: HttpClient
	){
		this.url = Global.url; 
	}


	testService (){
		return 'Probando el servicio de angular';
	}

	saveComunicate(comunicate: Comunicate): Observable<any>{
		let params = JSON.stringify(comunicate);
		let headers = new HttpHeaders().set('Content-Type','application/json');
		var slide = 'comunicados/';
		return this._http.post(this.url+slide+'agregar-comunicado',params,{headers:headers});
	}

	getComunicates() : Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url+'comunicados/comunicados/',{headers: headers});

	}

	getComunicate(id): Observable<any>{

		let headers = new HttpHeaders().set('Content-Type','application/json');
		return this._http.get(this.url+'comunicados/comunicado/'+id,{headers: headers});

	}

	getDeleteComunicate (id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');
		return this._http.delete(this.url+'comunicados/delete-comunicate/'+id,{headers: headers});


	}


	

}
