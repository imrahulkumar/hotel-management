import { Component, OnInit } from '@angular/core';
 import { AlertService } from '../../../_service/alert.service';
 //import { $ } from "protractor/built";
 declare var $:any;
 @Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
   message: any = "";
    Success: any;
    showerror: boolean = false;
    showsuccess: boolean = false;
  constructor(private alertService: AlertService) { }
debugger
   //method to initialize first
    ngOnInit() {
        //call the alert service to display a message on success and on error
        this.alertService.getMessage().subscribe(message => {
            debugger
            this.message = message
        
            if (this.message != null) {
                $('.alert-msg-error').hide();
                $('.alert-msg').hide();
                this.setHide();
                if (this.message.type === "success") {
                    this.showsuccess = true
                    $('.alert-msg-error').hide();
                    $('.alert-msg').show();
                    this.setHide();
                }
                if (this.message.type === "error") {
                    this.setHide();
                    this.showerror = true;
                    $('.alert-msg-error').show();
                    this.setHide();
                }
                if (this.message.type === "modal") {
                   $('#alertModal').modal();
                }
            };
        })
    }
      setHide() {
        //method to hide the message popup
        setTimeout(function () {
            $('.alert-msg').hide();
            $('.alert-msg-error').hide();
        }, 2500);
    }
    closeModal(){
        $('#alertModal').toggle();
    }
}
