import { TestBed } from '@angular/core/testing';

import { DstDatepickerService } from './dst-datepicker.service';

describe('DstDatepickerService', () => {
  let service: DstDatepickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DstDatepickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
