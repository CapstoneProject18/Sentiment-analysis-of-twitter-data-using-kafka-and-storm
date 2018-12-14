import { TestBed } from '@angular/core/testing';

import { Employee2Service } from './employee2.service';

describe('Employee2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Employee2Service = TestBed.get(Employee2Service);
    expect(service).toBeTruthy();
  });
});
