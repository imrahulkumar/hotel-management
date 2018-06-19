import { Component, OnInit } from "@angular/core";
import { DataService } from "../_service/data.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertService } from "../_service/alert.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ApiService } from "../../app/_service/service/api.service";
@Component({
  selector: "app-authority",
  templateUrl: "./authority.component.html",
  styleUrls: ["./authority.component.css"]
})
export class AuthorityComponent implements OnInit {
  completedBooking:any;
  partialBooking:any;
  constructor(
    private data: DataService,
    private alert: AlertService,
    private router: Router,
    private formBuilder: FormBuilder,
    private apiservice: ApiService
  ) {}

  ngOnInit() {
this.completedBooking = this.apiservice.completedBookingUser();
console.log("complete booking people",this.completedBooking);

this.partialBooking = this.apiservice.partialDataList();
console.log("complete partial people",this.partialBooking);
  }
}
