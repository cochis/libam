import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';

import { ModalboxComponent } from './components/modalbox/modalbox.component';
import { BannerComponent } from './components/banner/banner.component';
import { FeatureComponent } from './components/feature/feature.component';
import { OrganizationsComponent } from './components/organizations/organizations.component';
import { CtaComponent } from './components/cta/cta.component';
import { WorkShopComponent } from './components/work-shop/work-shop.component';
import { FaculityMemberComponent } from './components/faculity-member/faculity-member.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { CoursesComponent } from './components/courses/courses.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';
import { AboutComponent } from './components/about/about.component';
import { OfertComponent } from './components/ofert/ofert.component';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './components/home/home.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { BecasComponent } from './components/becas/becas.component';
import { InscriptionsComponent } from './components/inscriptions/inscriptions.component';
import { ComunicatesComponent } from './components/comunicates/comunicates.component';
import { CalendaryComponent } from './components/calendary/calendary.component';
import { LogoComponent } from './components/logo/logo.component';
import { PlantillaComponent } from './components/plantilla/plantilla.component';
import { DetailprimariaComponent } from './components/detailprimaria/detailprimaria.component';
import { LoginComponent } from './components/login/login.component';
import { CreateKnowsComponent } from './components/create-knows/create-knows.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { CreateComunicatesComponent } from './components/create-comunicates/create-comunicates.component';
import { DetailComunicateComponent } from './components/detail-comunicate/detail-comunicate.component';
import { RegisterComponent } from './components/register/register.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { ConstruccionComponent } from './components/construccion/construccion.component';




@NgModule({
  declarations: [
    AppComponent,
    ModalboxComponent,
    BannerComponent,
    FeatureComponent,
    OrganizationsComponent,
    CtaComponent,
    WorkShopComponent,
    FaculityMemberComponent,
    TestimonialComponent,
    CoursesComponent,
    PricingComponent,
    ContactComponent,
    FooterComponent,
    ErrorComponent,
    AboutComponent,
    OfertComponent,
    ServicesComponent,
    HomeComponent,
    ActivitiesComponent,
    BecasComponent,
    InscriptionsComponent,
    ComunicatesComponent,
    CalendaryComponent,
    LogoComponent,
    PlantillaComponent,
    DetailprimariaComponent,
    LoginComponent,
    CreateKnowsComponent,
    CreateUserComponent,
    CreateComunicatesComponent,
    DetailComunicateComponent,
    RegisterComponent,
    DocumentsComponent,
    ConstruccionComponent
    
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule

  ],
  providers: [
              appRoutingProviders
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
