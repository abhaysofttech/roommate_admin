import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FusionChartsModule } from "angular-fusioncharts";

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SharedModule } from './_shared/shared/shared.module';
import { LoginComponent, LoginViaPasswordComponent } from './_auth';
import { ActionSheetComponent } from './_auth/action-sheet/action-sheet.component';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Network } from '@ionic-native/network/ngx';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);

@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent,    
    LoginViaPasswordComponent,
    ActionSheetComponent
  ],
  entryComponents: [ActionSheetComponent],
  imports: [
    BrowserModule, 
    FusionChartsModule, 
    AppRoutingModule, 
    HttpClientModule,
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    SharedModule,
    IonicModule.forRoot(),
   ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    Network,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
