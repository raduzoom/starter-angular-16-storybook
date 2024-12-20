import { TestBed } from '@angular/core/testing';

import { ZoomLibService } from './zoom-lib.service';

describe('ZoomLibService', () => {
  let service: ZoomLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZoomLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
