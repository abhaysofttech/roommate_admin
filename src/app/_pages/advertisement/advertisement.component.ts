import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss'],
})
export class AdvertisementComponent implements OnInit {
  Ads: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.Ads = this.router.getCurrentNavigation().extras.state.ads;
        // this.profileImage = 'https://aklogical.com/api/profileImage/'+this.Ads.profileimages[0].profileId+ this.Ads.profileimages[0].mimeType;
      }
    })
  }

  ngOnInit() {}

}
