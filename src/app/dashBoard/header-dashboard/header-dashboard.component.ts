import { Component } from "@angular/core";
import { Router, NavigationStart, NavigationEnd } from "@angular/router";
@Component({
  selector: "app-header-dashboard",
  templateUrl: "./header-dashboard.component.html",
  styleUrls: ["./header-dashboard.component.css"]
})
export class HeaderDashboardComponent {
  header: boolean = false;
  UserName: any = "Please Login/SignUp";
  constructor(router: Router) {
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        window.scroll(0, 0);
        var url = document.location.pathname;
        if (
          url === "/" ||
          url === "/sign-up" ||
          url === "/login" ||
          url === "/authority"
        ) {
          this.header = true;
          console.log("true");
          let auth_dat = localStorage.getItem("auth");
          if (auth_dat != null || auth_dat != undefined) {
            this.UserName = JSON.parse(auth_dat).email;
          }
        } else {
          this.header = false;
        }
      }
    });
  }
  logout() {
    localStorage.clear();
    window.location.reload();
  }
}
