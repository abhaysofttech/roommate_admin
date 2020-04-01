import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvertiseService } from 'src/app/_services';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-advertisement-details',
  templateUrl: './advertisement-details.component.html',
  styleUrls: ['./advertisement-details.component.scss'],
})
export class AdvertisementDetailsComponent implements OnInit {
  adsId = '';
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    pager: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };
  Ads: any;
  userData: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _advertiseService: AdvertiseService,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    debugger
    this.route.params.subscribe(params => this.adsId = params.id);
    this._advertiseService.getAdsDetails(this.adsId)
      .subscribe(
        res => {
          this.Ads = res;
          this.Ads.visitedContact = false;
          // this._sharedService.getUserData.subscribe(
          //   (userData: any) => {
          //     this.userData = userData;
          //     this.Ads.adsvisits.filter(visitData => {
          //       if (visitData.phonenumber == this.userData.phonenumber) return this.Ads.visitedContact = true
          //     })
          //   })

        })
  }

  async approvedAds(id) {
    debugger
    const alert = await this.alertController.create({
      header: 'Approved Advertisement!',
      message: `Do you really want to approved ${this.Ads.bhkType} for ${this.Ads.marital} ${this.Ads.gender} Advertisement  `,
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this._advertiseService.updateAds(this.Ads.id, 'active')
            //  .pipe(first())
            .subscribe(
              data => {
                this.successApprovedAds();
              },
              error => {
                //  this.alertService.error(error);
                //  this.loading = false;
              });
          }
        },
        {
          text: 'No',
          handler: () => {
            // this.router.navigate(['/pages']);
          }
        }
      ]
    });
    await alert.present();
  }

  async successApprovedAds() {
    const alert = await this.alertController.create({
      header: 'Approved Advertisement!',
      message: `Your ${this.Ads.bhkType} for ${this.Ads.marital} ${this.Ads.gender} Advertisement Approved Successful `,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigate(['/pages']);
          }
        }
      ]
    });
    await alert.present();
}


}
