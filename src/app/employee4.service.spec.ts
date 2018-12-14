import { TestBed } from '@angular/core/testing';

import { Employee4Service } from './employee4.service';

describe('Employee4Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Employee4Service = TestBed.get(Employee4Service);
    expect(service).toBeTruthy();
  });
});
