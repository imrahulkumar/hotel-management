import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./dashBoard/home/home.component";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ConfirmBookingComponent } from "./dashBoard/confirm-booking/confirm-booking.component";
import { AuthorityComponent } from './authority/authority.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "", component: HomeComponent },
  { path: "confirm-booking", component: ConfirmBookingComponent },
    { path: "authority", component: AuthorityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
