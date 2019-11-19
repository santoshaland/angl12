import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from  '@angular/forms'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
 


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DataService } from './data.service';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"" ,component:HomeComponent},
      {path:"home" ,component:HomeComponent},
      {path:"aboutus" ,component:AboutusComponent},
      {path:"contactus" ,component:ContactusComponent},
      {path:"register",component:RegisterComponent},
      {path:"**" ,component:HomeComponent}
  ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
