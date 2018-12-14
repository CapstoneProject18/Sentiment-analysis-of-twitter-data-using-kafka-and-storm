import { TestBed } from '@angular/core/testing';

import { Employee3Service } from './employee3.service';

describe('Employee3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Employee3Service = TestBed.get(Employee3Service);
    expect(service).toBeTruthy();
  });
});
