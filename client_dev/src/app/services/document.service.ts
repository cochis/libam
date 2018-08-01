import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from  'rxjs/Observable';
import { Document } from '../models/document';
import { Global } from './global';
 

@Injectable()
export class DocumentService {
	public url:string;

	constructor(
		private _http: HttpClient
	){
		this.url = Global.url; 
	}


	testService (){
		return 'Probando el servicio de angular';
	}

	saveComunicate(Document: Document): Observable<any>{
		let params = JSON.stringify(Document);
		let headers = new HttpHeaders().set('Content-Type','application/json');
		var slide = 'documentos/';
		return this._http.post(this.url+slide+'registro-documento',params,{headers:headers});
	}

	getDocuments() : Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url+'documentos/documentos/',{headers: headers});

	}

	getDown(document_file): Observable<any>{
		console.log(document_file);
		let headers = new HttpHeaders().set('Content-Type','application/json');
		return this._http.get(this.url+'documentos/get-documento/'+document_file,{headers: headers});

	}


	

}
