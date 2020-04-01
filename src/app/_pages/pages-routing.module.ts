import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { AdvertisementDetailsComponent } from './advertisement-details/advertisement-details.component';

const routes: Routes = [
    {
        path: '', component: DashboardComponent,
        children: [
            // { path: '', component: DashboardComponent },
            { path: 'advertisement', component: AdvertisementComponent },
            { path: 'advertisementDetails/:id', component: AdvertisementDetailsComponent },
            
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }