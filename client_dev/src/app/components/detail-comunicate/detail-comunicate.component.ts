import { Component, OnInit } from '@angular/core';
import { Comunicate } from '../../models/comunicate';
import { ComunicateService } from '../../services/comunicate.service';
import { Global } from '../../services/global';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { UserService } from '../../services/user.service';




@Component({
  selector: 'app-detail-comunicate',
  templateUrl: './detail-comunicate.component.html',
  styleUrls: ['./detail-comunicate.component.css'],
  providers:[ComunicateService,UserService]
})
export class DetailComunicateComponent implements OnInit {
	public url: string;
	public comunicate: Comunicate;
  public identity;
  public token;
  public stats;
  public description_comunicate;

  constructor(
  	private _comunicateService: ComunicateService,
  	private _router: Router,
  	private _route: ActivatedRoute,
    private _userService: UserService
  	) {
    this.description_comunicate= false;
  		this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
      this.stats = this._userService.getStats();
      this.url= Global.url;

  	 }

  ngOnInit() {

  	this._route.params.subscribe(params =>{
  		let id = params.id;

  		this.getComunicate(id);
  		

  	})
  }


  getComunicate (id){
  	this._comunicateService.getComunicate(id).subscribe(
  		response => {
  			
  			this.comunicate = response.comunicate;

  		},
  		error => {
  			console.log(<any>error);

  		})

  }
  deleteComunicate(id) {
    this._comunicateService.getDeleteComunicate(id).subscribe(
        response => {
          if(response.comunicate){
            this._router.navigate(['/']);
          }
        },
        error => {
          console.log(<any>error);
        }
      );

  }

}
