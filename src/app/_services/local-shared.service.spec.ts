import { TestBed } from '@angular/core/testing';

import { LocalSharedService } from './local-shared.service';

describe('LocalSharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalSharedService = TestBed.get(LocalSharedService);
    expect(service).toBeTruthy();
  });
});
