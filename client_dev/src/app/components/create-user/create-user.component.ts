import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
	public titulo;
	public status;
	public knows;
	public projectForm;
	public onSubmit;


  constructor() {
  	this.onSubmit = false;
  this.titulo = false; 
  this.status = false;
  this.knows = false;
  this.projectForm = false;

}

  ngOnInit() {
  }

}
