/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SliderService } from './slider.service';

describe('Service: Slider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SliderService]
    });
  });

  it('should ...', inject([SliderService], (service: SliderService) => {
    expect(service).toBeTruthy();
  }));
});
