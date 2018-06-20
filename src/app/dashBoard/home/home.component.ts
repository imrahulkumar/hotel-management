import { Component, OnInit } from "@angular/core";
import { DataService } from "../../_service/data.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertService } from "../../_service/alert.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ApiService } from "src/app/_service/service/api.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  hoteltableView: boolean = false;
  procedBooking: boolean = false;
  VisitorDetails: any;
  UserName: any;
  systemIp: any;
  rForm: FormGroup;
  hotelListDisplay: any;
  patternName: string = "[a-zA-Z ]*";
  constructor(
    private data: DataService,
    private alert: AlertService,
    private router: Router,
    private formBuilder: FormBuilder,
    private apiservice: ApiService
  ) {}

  ngOnInit() {
    this.rForm = this.formBuilder.group({
      city: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(this.patternName)
        ])
      ],
      checkin: ["", Validators.required],
      checkout: ["", Validators.required],
      room: ["", Validators.required],
      Adult: ["", Validators.required],
      children: ["", Validators.required],
      region_name: [""],
      ip: [""]
    });
    this.getIpAddress();
    this.hotelList();
    let auth_dat = localStorage.getItem("auth");
  }
  hotel(rform) {
    this.rForm.get("ip").setValue(this.systemIp.ip);
    this.rForm.get("region_name").setValue(this.systemIp.region_name);
    this.apiservice.partialData(rform.value);
    if (!rform.valid) {
      this.alert.error("Please fill the form correctly");
    } else {
      localStorage.setItem("guestUser", JSON.stringify(rform.value));
      this.VisitorDetails = rform.value;
      this.alert.success("Please select the hotel");
      this.hoteltableView = true;
    }
  }

  //it will fetch the hotel list
  hotelList() {
    this.hotelListDisplay = this.apiservice.readHotelList();
    console.log(this.hotelListDisplay);
  }

  //check box on change listener
  checkBox(e, item) {
    if (e.target.checked) {
      this.procedBooking = true;
      this.data.changeMessageHotel(item);
      debugger;
    } else {
    }
  }

  //moving to next page
  procedBookingButton() {
    let auth_dat = localStorage.getItem("auth");
    if (auth_dat === null || auth_dat == "undefined") {
      this.alert.error("to proceed further login please", true);
      debugger;
      // setTimeout(function() {

      // }, 300);

      setTimeout(() => {
        //<<<---    using ()=> syntax
        this.router.navigate(["/login"]);
      }, 3000);
    } else {
      this.router.navigate(["/confirm-booking"]);
    }
  }

  getIpAddress() {
    this.apiservice.getIpAddress().subscribe(
      res => {
        this.systemIp = res;
        console.log("systemIP", this.systemIp);
      },
      error => {
        var data = {
          city: "Gurgaon",
          country_code: "IN",
          country_name: "India",
          ip: "125.63.74.98",
          latitude: 28.4667,
          longitude: 77.0333,
          metro_code: 0,
          region_code: "HR",
          region_name: "Haryana",
          time_zone: "Asia/Kolkata",
          zip_code: "122001"
        };
        this.systemIp = data;

        this.alert.error("IP Data Not Fetched", true);
      }
    );
  }
}
