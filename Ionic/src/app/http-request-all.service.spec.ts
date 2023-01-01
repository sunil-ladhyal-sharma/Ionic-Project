import { TestBed } from '@angular/core/testing';

import { HttpRequestAllService } from './http-request-all.service';

describe('HttpRequestAllService', () => {
  let service: HttpRequestAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpRequestAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
