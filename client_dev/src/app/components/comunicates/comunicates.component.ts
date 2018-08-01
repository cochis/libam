import { Component, OnInit } from '@angular/core';
import { Comunicate } from '../../models/comunicate';
import { ComunicateService } from '../../services/comunicate.service';
import { UserService } from '../../services/user.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'comunicates',
  templateUrl: './comunicates.component.html',
  styleUrls: ['./comunicates.component.css'],
  providers: [ComunicateService,UserService]
})
export class ComunicatesComponent implements OnInit {
	public comunicates: Comunicate[];
	public url: string;
  public fileHref;
  public page;
  public identity;
  public token;
  public stats;

  
  constructor(
  	private _comunicateService : ComunicateService,
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
    
  	) {
  	this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.stats = this._userService.getStats();
    this.url= Global.url;
   }

  ngOnInit() {
  	this.getComunicates();
  }
  getComunicates (){

  	this._comunicateService.getComunicates().subscribe(
  		response =>{
  			if(response.comunicates){
  				
  				this.comunicates = response.comunicates; 
          this.page = 1;
          
  			}
  		},
  		error => {
  			console.log(<any>error);
  		}	
  	);

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
