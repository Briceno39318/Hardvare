import { TestBed } from '@angular/core/testing';

import { HardvareProductsService } from './hardvare-products.service';

describe('HardvareProductsService', () => {
  let service: HardvareProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardvareProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
