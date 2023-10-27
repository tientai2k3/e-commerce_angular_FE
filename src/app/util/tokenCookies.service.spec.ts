/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TokenCookiesService } from './tokenCookies.service';

describe('Service: TokenCookies', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenCookiesService]
    });
  });

  it('should ...', inject([TokenCookiesService], (service: TokenCookiesService) => {
    expect(service).toBeTruthy();
  }));
});
