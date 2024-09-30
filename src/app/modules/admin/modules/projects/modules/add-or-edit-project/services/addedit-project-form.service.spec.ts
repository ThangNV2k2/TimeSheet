import { TestBed } from '@angular/core/testing';

import { AddeditProjectFormService } from './addedit-project-form.service';

describe('AddeditProjectFormService', () => {
  let service: AddeditProjectFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddeditProjectFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
