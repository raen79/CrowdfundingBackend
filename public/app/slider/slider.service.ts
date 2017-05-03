import { Injectable } from '@angular/core';

import { Slide } from './slide';
import { MOCK_SLIDER_DATA } from '../MOCK_DATA';

@Injectable()
export class SliderService {

  constructor() { }

  private getSlides(): Promise<any> {
    return Promise.resolve(MOCK_SLIDER_DATA);
  }

  getActiveSlides(): Promise<Slide[]> {
    return this.getSlides()
      .then(slides => slides.data.active as Slide[])
      .catch(e => console.error(e)); // TODO: Handle error
  }

  getBufferSlides(): Promise<Slide[]> {
    return this.getSlides()
      .then(slides => slides.data.buffer)
      .catch(e => console.error(e)); // TODO: Handle error
  }

}
