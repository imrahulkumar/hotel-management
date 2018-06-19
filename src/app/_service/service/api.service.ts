import { Injectable } from "@angular/core";
import { AlertService } from "../../_service/alert.service";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import "rxjs/Rx";
import { knownFolders, File, Folder } from "file-system";
@Injectable({
  providedIn: "root"
})
export class ApiService {
  clientdata:any;
  loginData = [
    { email: "rahul@gmail.com", password: "rahul", UserType: "user" },
    { email: "mohit@gmail.com", password: "mohit", UserType: "user" },
    { email: "rohit@gmail.com", password: "rohit", UserType: "user" },
    { email: "admin@gmail.com", password: "admin", UserType: "admin" },
    { email: "hotel@gmail.com", password: "rahul", UserType: "admin" },
    { email: "auth@gmail.com", password: "rahul", UserType: "admin" }
  ];

  hotelList = [
    { hotelName: "S&N Dalian Hotel", Address: "delhi", price: "2000" },
    { hotelName: "S&N Phoenix Comfort Villa", Address: "pune", price: "2006" },
    { hotelName: "Sabah Hotel Sandakan", Address: "gurugram", price: "2500" },
    { hotelName: "Sakula Mansyon", Address: "noida", price: "2090" },
    { hotelName: "SAM Hotel", Address: "surat", price: "2500" },
    { hotelName: "Sanuj Hotel", Address: "faridabad", price: "5000" },
    { hotelName: "Sanmen Hotel", Address: "greater noida", price: "7000" },
    { hotelName: "Sant Grand Hotel", Address: "ooty", price: "4540" },
    { hotelName: "Sea Horizo Hotel", Address: "dwarka", price: "8900" },
    { hotelName: "Senhao Traders Hotel", Address: "palam", price: "4500" },
    { hotelName: "S&N Dalian Hotel", Address: "delhi", price: "2000" },
    { hotelName: "S&N Dalian Hotel", Address: "delhi", price: "2000" },
    { hotelName: "S&N Dalian Hotel", Address: "delhi", price: "2000" },
    { hotelName: "S&N Dalian Hotel", Address: "delhi", price: "2000" }
  ];

  completedBookingHotelDetails = [
    {
      hotelName: "S&N Phoenix Comfort Villa",
      Address: "pune",
      price: "2006",
      email: "rahul@gmail.com",
      password: "rahul",
      Adult: "2",
      checkin: "2018-06-07",
      checkout: "2018-06-24",
      children: "3",
      city: "werwer",
      room: "1",
      ip:"",
      region_name:""
      
    
    },

    {
      hotelName: "Sabah Hotel Sandakan",
      Address: "gurugram",
      price: "2500",
      email: "rahul@gmail.com",
      password: "rahul",
      Adult: "2",
      checkin: "2018-06-07",
      checkout: "2018-06-24",
      children: "3",
      city: "werwer",
      room: "1"
    },

    {
      hotelName: "Sakula Mansyon",
      Address: "noida",
      price: "2090",
      email: "rahul@gmail.com",
      password: "rahul",
      Adult: "2",
      checkin: "2018-06-07",
      checkout: "2018-06-24",
      children: "3",
      city: "werwer",
      room: "1"
    }
  ];

  partialBookingDraft = [
    {
      email: "rahul@gmail.com",
      password: "rahul",
      Adult: "2",
      checkin: "2018-06-07",
      checkout: "2018-06-24",
      children: "3",
      city: "werwer",
      room: "1",
        region_name:"",
      ip:""
    }
  ];

  constructor(private alert: AlertService, public http: Http) {}

  login(data) {
    var email = data.email;
    var password = data.password;
    console.log(email);
    for (var i = 0; i < this.loginData.length; i++) {
      var element = this.loginData[i];
      if (element.email == email) {
        if (element.password == password) {
             var mydata =   { email: element.email, password: element.password, UserType: element.UserType };
          this.alert.success("login successfull");
          return mydata;
        }
      }
    }
    this.alert.error("Please login with credential")

  }

  register(data) {
    var email = data.email;
    var password = data.password;
    var UserType = "";
    var mydata = {
      email: email,
      password: password,
      UserType: UserType
    };
    this.loginData.push(mydata);
    console.log(this.loginData);
  }

  readHotelList() {
    return this.hotelList;
  }

  completedBookingUser() {
    return this.completedBookingHotelDetails;
  }

//to update the complete booking details
  updateCompleteBookingUser(data)
  {
    this.completedBookingHotelDetails.push(data);
  }

//the user who paritally completed till the form filling ...OR(without selecting the hotels)
  partialData(data)
  {    
    console.log("partaialdata",data);
    this.partialBookingDraft.push(data);
   
  }
  partialDataList()
  {
 return this.partialBookingDraft;
  }
  
  //get the system information
   getIpAddress() {
      return this.http
            .get('http://freegeoip.net/json/?callback')
            .map(res => res.json())
            
  }
}
