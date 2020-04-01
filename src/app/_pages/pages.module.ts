import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { SharedModule } from '../_shared/shared/shared.module';
import { AdvertisementDetailsComponent } from './advertisement-details/advertisement-details.component';

@NgModule({
    declarations:[
        DashboardComponent,
        AdvertisementComponent,
        AdvertisementDetailsComponent,
        // PagesComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        IonicModule,
        PagesRoutingModule,
        SharedModule
    ]
})
export class PagesModule{}