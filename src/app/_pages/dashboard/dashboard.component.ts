import { Component, OnInit } from '@angular/core';
import { AdvertiseService } from 'src/app/_services';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
pending:any = [];
active:any = [];
closed:any = [];
  constructor(
    private router: Router,
    private _advertiseService: AdvertiseService,
  ) { }

  ngOnInit() {
    this._advertiseService.getRoomMateAds()
    .subscribe(
      (res: any) => {
        console.log(res);
        this.pending = res.filter(data => {return data.adsStatus == 'pending'}).map(data => {return data})
    // this.tracks = this.serviceType.filter(x => { return x.serviceType == param; }).map(data => { return data });

      })
  }

  viewAdvertise(){
    let navigationExtras: NavigationExtras = { state: { ads: this.pending } };
    this.router.navigate(['/pages/advertise/advertisement'], navigationExtras);
  }

}
