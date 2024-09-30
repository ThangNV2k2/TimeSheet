import { TestBed } from '@angular/core/testing';

import { AddeditProjectApiService } from './addedit-project-api.service';

describe('AddeditProjectApiService', () => {
  let service: AddeditProjectApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddeditProjectApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
