import { TestBed } from '@angular/core/testing';

import { SigninSignupServiceService } from './signin-signup-service.service';

describe('SigninSignupServiceService', () => {
  let service: SigninSignupServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SigninSignupServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
