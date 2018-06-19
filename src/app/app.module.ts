import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataService } from "./_service/data.service";
import { AlertService } from "./_service/alert.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "./_service/sharedModule/sharedmodule";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './dashBoard/home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HeaderDashboardComponent } from './dashBoard/header-dashboard/header-dashboard.component';
import { ApiService } from "../app/_service/service/api.service";
import { ConfirmBookingComponent } from './dashBoard/confirm-booking/confirm-booking.component';
import { AuthorityComponent } from './authority/authority.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    HeaderDashboardComponent,
    ConfirmBookingComponent,
    AuthorityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [DataService,AlertService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
