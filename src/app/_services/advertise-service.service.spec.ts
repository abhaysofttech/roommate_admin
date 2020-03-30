import { TestBed } from '@angular/core/testing';

import { AdvertiseServiceService } from './advertise-service.service';

describe('AdvertiseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdvertiseServiceService = TestBed.get(AdvertiseServiceService);
    expect(service).toBeTruthy();
  });
});
