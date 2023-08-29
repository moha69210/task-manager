import { TestBed } from '@angular/core/testing';

import { CrudTaskListServiceService } from './crud-task-list-service.service';

describe('CrudTaskListServiceService', () => {
  let service: CrudTaskListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudTaskListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
