import { TestBed } from '@angular/core/testing';

import { VerifyTextService } from './verify-text.service';

describe('VerifyTextService', () => {
  let service: VerifyTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifyTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
