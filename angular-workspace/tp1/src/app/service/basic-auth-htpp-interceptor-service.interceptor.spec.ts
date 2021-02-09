import { TestBed } from '@angular/core/testing';

import { BasicAuthHtppInterceptorServiceInterceptor } from './basic-auth-htpp-interceptor-service.interceptor';

describe('BasicAuthHtppInterceptorServiceInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BasicAuthHtppInterceptorServiceInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BasicAuthHtppInterceptorServiceInterceptor = TestBed.inject(BasicAuthHtppInterceptorServiceInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
