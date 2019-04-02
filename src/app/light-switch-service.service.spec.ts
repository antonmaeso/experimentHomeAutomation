import { TestBed } from '@angular/core/testing';

import { LightSwitchServiceService } from './light-switch-service.service';

describe('LightSwitchServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LightSwitchServiceService = TestBed.get(LightSwitchServiceService);
    expect(service).toBeTruthy();
  });
});
