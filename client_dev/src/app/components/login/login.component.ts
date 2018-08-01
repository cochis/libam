import { Component, OnInit } from '@angular/core';
import  { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Global } from '../../services/global';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {
	public title:string;
	public user:User;
	public status:string;
	public identity:User ;
	public token;
  public titulo;

  constructor(
  	private _route: ActivatedRoute,
  	private _router: Router,
  	private _userService: UserService

  	) { 
    this.titulo = false;
  		this.title = 'Identificate';
  		this.user = new User (   '', 
							 	 '', 
								 '', 
								 '', 
								 '',
								 '', 
								 '', 
								 '', 
								 '', 
								 '', 
								 '', 
								 '', 
								 '', 
								 '', 
								 '', 
								 '', 
								 '', 
								 '', 
								 '', 
								 '', 
								 '', 
								 '', 
								 '', 
								 '', 
								 '', 
								 '', 
								 '', 
								 '', 
								 '', 
								 '', 
								 '', 
								 '', 
								 '', 
								 false, 
								 '', 
								 '',
								 '' ,
                 '',
                 '');

  	}

  ngOnInit() {
  }
  onSubmit(form){	
  	
  	this._userService.signup(this.user).subscribe(
  		response => {
  			this.identity = response.user;
  			
  			if(!this.identity) {
  				this.status="failed";
  				
  			}
  			else{

  				this.status= "success";
  				//persistencia

  				
  				localStorage.setItem('identity',JSON.stringify(response.user));




  				//conseguir token
  				
  				this.getToken();

  			}
  			
  			
  		},
  		error => {
  			var errorMesage = <any>error;
  			console.log(errorMesage);
  			if(errorMesage=!null){
	  			this.status= "failed";

  			}
  			
  		});
  }

  getToken(){
  	  	this._userService.signup(this.user,'true').subscribe(
  		response => {
  			;

  			this.token = response.token;

  			
  			if(this.token <= 0) {
  				this.status="failed";
  			}
  			else{
  				this.status= "success";
  				//persistencia token
  				localStorage.setItem('token',JSON.stringify(response.token));
  				this._router.navigate(['/']);

  				//conseguir contadores

  			}
  			
  			
  		},
  		error => {
  			var errorMesage = <any>error;
  			console.log(errorMesage);
  			if(errorMesage=!null){
	  			this.status= "failed";

  			}
  			
  		});

  }

}
