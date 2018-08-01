import { Component, OnInit } from '@angular/core';
import { Knows } from '../../models/knows';
import { KnowsService } from '../../services/knows.service';



@Component({
  selector: 'app-create-knows',
  templateUrl: './create-knows.component.html',
  styleUrls: ['./create-knows.component.css'],
  providers:[KnowsService]
})
export class CreateKnowsComponent implements OnInit {
  public titulo: string;
  public knows: Knows;
  public status: string;
  public projectForm;
  constructor(
  	private _knowsService: KnowsService 
  	) { 
  	this.titulo = "Crear Conocenos";

  	this.knows = new Knows('','','',true);
    this.status = 'start';
    this.projectForm = false;
  }

  ngOnInit() {
  }

  onSubmit(form){
  	
    this._knowsService.saveKnows(this.knows).subscribe(
      response => {

       if(response.knows) {
         this.status = 'success';
         form.reset();
       }
       else {
         this.status = 'failed';
       }

      },

      error => {
        console.log(<any>error);
      }
      );


  }

}
