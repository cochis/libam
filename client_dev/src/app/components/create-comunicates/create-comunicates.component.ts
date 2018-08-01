import { Component, OnInit } from '@angular/core';
import { Comunicate } from '../../models/comunicate';
import { ComunicateService } from '../../services/comunicate.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';




@Component({
  selector: 'app-create-comunicates',
  templateUrl: './create-comunicates.component.html',
  styleUrls: ['./create-comunicates.component.css'],
  providers: [ComunicateService,UploadService]
})
export class CreateComunicatesComponent implements OnInit {

	 public titulo: string;
	 public comunicate: Comunicate;
   public save_comunicate;
	 public status : string;
	 public filesToUpload: Array<File>;
	 public slide: string;
   public CurrentDate;
   public day;
   public month;
   public year;
   public today;
   public description_comunicate;
  



  constructor(
  	private _comunicateService : ComunicateService,
  	private _uploadService : UploadService
  	) { 
    this.description_comunicate = false;
  	this.titulo = "Crear Comunicado";
  	this.comunicate = new Comunicate ('','','','',true,'');
  	this.slide = "comunicados/";
    this.CurrentDate =  new Date();
    this.day = this.CurrentDate.getDate();
    this.month = this.CurrentDate.getMonth();
    this.year = this.CurrentDate.getFullYear();
    this.today = this.day+"/"+this.month+"/"+this.year;

  }

  ngOnInit() {



  }

  onSubmit(form){

    this.comunicate.date_comunicate = this.today;
  	
  	this._comunicateService.saveComunicate(this.comunicate).subscribe(
  		response => {
  			if(response.comunicate){
  			//subir la imagen 
  			
  		
			this._uploadService.makeFileRequest(Global.url+this.slide+"upload-image-comunicate/"+response.comunicate._id,[],this.filesToUpload,'image').then((result:any) =>{
  					this.status = 'success';
            this.save_comunicate= result.comunicate;
            form.reset();
  					

  				});
  				

  			}else{

  		
  				this.status = 'failed';
  			}

  		},
  		error => {
  			console.log(error);

  		});

  }

  fileChangeEvent(fileInput:any){
    console.log(fileInput);
  	this.filesToUpload = <Array<File>>fileInput.target.files;


  }

}
