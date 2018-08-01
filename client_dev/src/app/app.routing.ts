import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { OfertComponent } from './components/ofert/ofert.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { BecasComponent } from './components/becas/becas.component';
import { InscriptionsComponent } from './components/inscriptions/inscriptions.component';
import { ComunicatesComponent } from './components/comunicates/comunicates.component';
import { CalendaryComponent } from './components/calendary/calendary.component';
import { PlantillaComponent } from './components/plantilla/plantilla.component';
import { DetailprimariaComponent } from './components/detailprimaria/detailprimaria.component';
import { LoginComponent } from './components/login/login.component';
import { CreateKnowsComponent } from'./components/create-knows/create-knows.component'
import { CreateUserComponent } from'./components/create-user/create-user.component';
import { CreateComunicatesComponent } from './components/create-comunicates/create-comunicates.component';
import { DetailComunicateComponent } from './components/detail-comunicate/detail-comunicate.component';
import { RegisterComponent } from './components/register/register.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { ConstruccionComponent } from './components/construccion/construccion.component';





 



const appRoutes: Routes =[
	{path: '' , component: HomeComponent},
	{path: 'nosotros' , component: AboutComponent},
	{path: 'oferta' , component: OfertComponent},
	{path: 'actividades' , component: ActivitiesComponent},
	{path: 'becas' , component: BecasComponent},
	{path: 'inscripciones' , component: InscriptionsComponent},
	{path: 'comunicados' , component: ComunicatesComponent},
	{path: 'calendario' , component: CalendaryComponent},
	{path: 'servicios' , component: ServicesComponent},
	{path: 'contacto' , component: ContactComponent},
	{path: 'plantilla' , component: PlantillaComponent},
	{path: 'PrimariaLibam' , component: DetailprimariaComponent},
	{path: 'login', component: LoginComponent},
	{path: 'crear-knows', component: CreateKnowsComponent},
	{path: 'crear-user', component: CreateUserComponent},
	{path: 'crear-comunicados', component: CreateComunicatesComponent},
	{path: 'comunicado/:id', component: DetailComunicateComponent},
	{path: 'registro', component: RegisterComponent},
	{path: 'login', component: LoginComponent},
	{path: 'documentos', component: DocumentsComponent},
	{path: 'construccion', component: ConstruccionComponent},
	
	

	
	{path: '**' , component: ErrorComponent}

];	


export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);  
