import { TestBed, inject } from '@angular/core/testing';

import { HttpReqInterceptorService } from './http-req-interceptor.service';

describe('HttpReqInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpReqInterceptorService]
    });
  });

  it('should be created', inject([HttpReqInterceptorService], (service: HttpReqInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
