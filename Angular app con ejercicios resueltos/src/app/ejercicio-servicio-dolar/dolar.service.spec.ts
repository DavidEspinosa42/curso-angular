import { TestBed } from '@angular/core/testing';

import { DolarService } from './dolar.service';

describe('DolarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DolarService = TestBed.get(DolarService);
    expect(service).toBeTruthy();
  });
});
