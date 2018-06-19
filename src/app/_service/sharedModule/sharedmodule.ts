import{AlertComponent} from './alert/alert.component';
import {LoaderComponent} from './loader/loader.component';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { AlertService } from "../_service/alert.service";
@NgModule({

    exports:[
        AlertComponent,
        LoaderComponent
    ],
    imports:[
        CommonModule,
    HttpModule,
        RouterModule
    ],
    declarations:[
        AlertComponent,
        LoaderComponent
    ],
    providers:[]
})

export class SharedModule{}