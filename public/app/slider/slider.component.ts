import { Component, OnInit } from '@angular/core';

import { Slide } from './slide';
import { SliderService } from './slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [ SliderService ]
})
export class SliderComponent implements OnInit {

  private active: Slide[];
  private buffer: Slide[];

  constructor(private sliderService: SliderService) { }

  ngOnInit(): void {
    this.getActiveSlides();
    this.getBufferSlides();
  }

  previous(): void {
    this.active.push(this.buffer.shift());
    this.buffer.push(this.active.shift());
  }

  next(): void {
    this.active.unshift(this.buffer.pop());
    this.buffer.unshift(this.active.pop());
  }

  getActiveSlides(): void {
    this.sliderService.getActiveSlides()
        .then(slides => this.active = slides); //TODO: Handle errors
  }

  getBufferSlides(): void {
    this.sliderService.getBufferSlides()
        .then(slides => this.buffer = slides); //TODO: Handle errors
  }

  onClick(slideIndex: number): void {
    switch (slideIndex) {
      case 2:
        this.previous();
        break;
      case 0:
        this.next();
        break;
    }
  }

}
