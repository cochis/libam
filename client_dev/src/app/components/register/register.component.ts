import { Component, OnInit } from '@angular/core';
import  { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Global } from '../../services/global';
import {Router, ActivatedRoute, Params} from '@angular/router';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UserService]
})
export class RegisterComponent implements OnInit {
	public titulo: string;
	public user: User;
	public url: string;
	public status: string;
	public n;
	public d;
	public res;
  constructor(
  		private _route: ActivatedRoute,
  		private _router: Router,
  		private _userService : UserService
  	) {
  	this.titulo = "Registro de usuarios";
  	this.url  = Global.url; 
  	this.status = "start";
  	this.d = new Date();
    this.n = this.d.getFullYear().toString() ;




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
								 '' ,
								 '',
								 '',
								 '');


  }

  ngOnInit() {


  	
  }

  onSubmit(form){
  	  	
  			console.log(this.user);
  	this._userService.register(this.user).subscribe(
  		response => {

  			if(response.user && response.user._id){
  				this.status="success";
  				form.reset();
  			}
  		},
  		error => {
  			console.log(<any>error)

  		});
  }


}
