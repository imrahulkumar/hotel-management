import { Component, OnInit } from "@angular/core";
import { DataService } from "../../_service/data.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertService } from "../../_service/alert.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ApiService } from "src/app/_service/service/api.service";
@Component({
  selector: "app-confirm-booking",
  templateUrl: "./confirm-booking.component.html",
  styleUrls: ["./confirm-booking.component.css"]
})
export class ConfirmBookingComponent implements OnInit {
  hotelInfo: any;
  dataJson: any;
  constructor(
    private data: DataService,
    private alert: AlertService,
    private router: Router,
    private formBuilder: FormBuilder,
    private apiservice: ApiService
  ) {}

  ngOnInit() {
    let guestUser = JSON.parse(localStorage.getItem("guestUser"));
    let auth = JSON.parse(localStorage.getItem("auth"));
    this.data.currentMessageHotel.subscribe(
      message => (this.hotelInfo = message)
    );
    console.log("guestUser", guestUser);
    console.log("hotel", this.hotelInfo);

    this.dataJson = {
      Adult: guestUser.Adult,
      checkin: guestUser.checkin,
      checkout: guestUser.checkout,
      children: guestUser.children,
      city: guestUser.city,
      ip: guestUser.ip,
      region_name: guestUser.region_name,
      room: guestUser.room,
      Address: this.hotelInfo.Address,
      hotelName: this.hotelInfo.hotelName,
      price: this.hotelInfo.price,
      email: auth.email,
      password: auth.password
    };

    console.log("data =", this.dataJson);
  }

  confirmBooked()
  {
    this.apiservice.updateCompleteBookingUser(this.dataJson);
    this.router.navigate([""]);
  }
}
