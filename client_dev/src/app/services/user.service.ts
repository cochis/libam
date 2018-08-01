import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from  'rxjs/Observable';
import { Global } from './global';
import { User } from '../models/user';
 

@Injectable()
export class UserService {
	public url:string;
	public identity;
	public token;
	public stats;

	constructor(
		private _http: HttpClient
	){
		this.url = Global.url; 

	}



	register(user: User): Observable<any>{
		let params = JSON.stringify(user);
		let headers = new HttpHeaders().set('Content-Type','application/json');
		let slide = 'libam-internal/';
		return this._http.post(this.url+slide+'registro-usuario/',params,{headers:headers});
	}


	signup(user: User,gettoken = null): Observable<any> {
		if(gettoken != null){
			user.gettoken = gettoken;	

			}
		let params = JSON.stringify(user);
		let headers = new HttpHeaders().set('Content-Type','application/json');
		let slide = 'libam-internal/';
		return this._http.post(this.url+slide+'login/',params,{headers:headers});

		

	}
	getIdentity(){
		let identity = JSON.parse(localStorage.getItem('identity'));
		if (identity != "undefined" ){
			this.identity = identity;
			
		} else {
			this.identity = null;
		}
		return this.identity;
	}
	getToken(){
		let token = JSON.parse(localStorage.getItem('token'));
		if (token != "undefined" ){
			this.token = token;
		} else {
			this.token = null;
		}
		return this.token;
	}

	getStats(){
		let stats = JSON.parse(localStorage.getItem('stats'));
		if(stats!="undefined"){
			this.stats =stats;
		} else{
			this.stats = null;
		}


		return this.stats;

	}


	

}
