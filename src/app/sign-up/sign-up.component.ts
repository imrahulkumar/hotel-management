import { Component, OnInit } from "@angular/core";
import { DataService } from "../_service/data.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertService } from "../_service/alert.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ApiService } from "../../app/_service/service/api.service";
@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  rForm: FormGroup;
  patternMail: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
  patternPhone: string = "[0-9]*";
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
          Validators.minLength(3)        
        ])
      ],
      phone: ["",   Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(this.patternPhone)
        ])]
    });
  }
  signup(form)
  {

    if(form.valid)
    {
       this.apiservice.register(form.value);
      this.alert.success("registration successfull",true);
    }
    else
    {
        this.alert.error("fill the form correctly",true);
    }
  }
}
