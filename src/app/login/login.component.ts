import { Component, OnInit } from "@angular/core";
import { DataService } from "../_service/data.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertService } from "../_service/alert.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ApiService } from "../../app/_service/service/api.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
   rForm: FormGroup;
 patternName: string = "[a-zA-Z ]*";
   patternMail: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
  constructor(
    private data: DataService,
    private alert: AlertService,
    private router: Router,
    private formBuilder: FormBuilder,
    private apiservice: ApiService
  ) {}

  ngOnInit() {
    this.rForm = this.formBuilder.group({
      email: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(this.patternMail)
        ])
      ],
      password: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10)
        ])
      ]
    });
  }
  login(form)
  {
    if(!form.valid)
    {
      this.alert.error("Please fill the form correctly");
    }
    else
    {
      var data = this.apiservice.login(form.value);     
      localStorage.setItem("auth", JSON.stringify(data));
       if(data.UserType =="user")
      {
        this.router.navigate([""]);
      }
      else if(data.UserType =="admin") {
this.router.navigate(["/authority"]);
      }
      else
      {
        this.router.navigate([""]);
      }
    }
  }
}
