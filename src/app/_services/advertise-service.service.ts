import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdvertiseService {

  constructor(
    private http: HttpClient
  ) { }
  getRoomMateAds() {
    return this.http.get(`${SERVER_URL}/postads`);
  }

  getAdsDetails(adId) {
    return this.http.get(`${SERVER_URL}/postads/${adId}`);
}
updateAds(id: string, status: string) {
  return this.http.put(`${SERVER_URL}/postads/updateads/${id}`, {adsStatus: status});

}
}
