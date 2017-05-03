import { TestBed, inject } from '@angular/core/testing';

import { ProjectFormService } from './project-form.service';

describe('ProjectFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectFormService]
    });
  });

  it('should ...', inject([ProjectFormService], (service: ProjectFormService) => {
    expect(service).toBeTruthy();
  }));
});
