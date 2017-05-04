import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.css']
})
export class LandingViewComponent implements OnInit {
  sort = JSON.stringify([{column: "backers", order:"desc"}]);

  constructor() { }

  ngOnInit() {
  }

}
