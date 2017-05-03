/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProjectViewService } from './project-view.service';

describe('ProjectViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectViewService]
    });
  });

  it('should ...', inject([ProjectViewService], (service: ProjectViewService) => {
    expect(service).toBeTruthy();
  }));
});
