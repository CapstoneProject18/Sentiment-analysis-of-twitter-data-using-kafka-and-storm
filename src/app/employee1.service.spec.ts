import { TestBed } from '@angular/core/testing';

import { Employee1Service } from './employee1.service';

describe('Employee1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Employee1Service = TestBed.get(Employee1Service);
    expect(service).toBeTruthy();
  });
});
