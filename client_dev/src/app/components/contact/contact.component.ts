import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers:[ContactService]
})
export class ContactComponent implements OnInit {
  public titulo: string;
  public contact: Contact;
  public status: string;
  public subject;

  constructor(
  	private _contactService: ContactService 
  	) { 

  		this.titulo = "Contacto";
	  	this.contact = new Contact('','','','','');
    	this.status = 'start';
      this.subject = false;

  		}

  ngOnInit() {
  }
  onSubmit(form){
  	
    this._contactService.saveContact(this.contact).subscribe(
      response => {

       if(response.contact) {
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


