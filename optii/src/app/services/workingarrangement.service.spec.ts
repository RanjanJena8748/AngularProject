import { TestBed, inject } from '@angular/core/testing';

import { WorkingarrangementService } from './workingarrangement.service';

describe('WorkingarrangementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkingarrangementService]
    });
  });

  it('should be created', inject([WorkingarrangementService], (service: WorkingarrangementService) => {
    expect(service).toBeTruthy();
  }));
});
