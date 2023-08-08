import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ADDSTUDENTComponent } from './addstudent/addstudent.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HOMEComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HelpsComponent } from './helps/helps.component';
import { HttpClientModule } from '@angular/common/http';
import {StudentListComponent } from 'src/app/student-list/student-list.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ADDSTUDENTComponent,
    NavbarComponent,
    HOMEComponent,
    AboutComponent,
    HelpsComponent,
    StudentListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
