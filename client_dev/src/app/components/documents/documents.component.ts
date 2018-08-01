import { Component, OnInit } from '@angular/core';
import { Document } from '../../models/document';
import { DocumentService } from '../../services/document.service';
import { Global } from '../../services/global';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
  providers:[DocumentService]
})
export class DocumentsComponent implements OnInit {
	public document: Document[];
	public url: string;

	public page;
  public ext_split;
  public file_ext;

  constructor(
  	private _documentService : DocumentService
  	) {
  	this.url= Global.url;
  }

  ngOnInit() {
  	this.getDocuments();
  }
    getDocuments (){

  	this._documentService.getDocuments().subscribe(
  		response =>{
  			if(response.document){
  				
  				this.document = response.document; 
          this.page = 1;
          
  			}
  		},
  		error => {
  			console.log(<any>error);
  		}	
  	);

  }

  getDown(document_file) {
    this._documentService.getDown(document_file).subscribe(
      response => {

        console.log(document_file);

      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
