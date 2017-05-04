import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';
import { Router }   from '@angular/router';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {
  
  query: string = "";
  filter: string;
  sorts = [
  	{ name: "Oldest First", value: JSON.stringify([{column: "created_at", order:"asc"}]) },
  	{ name: "Newest First", value: JSON.stringify([{column: "created_at", order:"desc"}]) },
  	{ name: "Most Popular", value: JSON.stringify([{column: "backers", order:"desc"}]) },
      { name: "Least Popular", value: JSON.stringify([{column: "backers", order:"asc"}]) }
  ];
  sort: string = this.sorts[2].value;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
	iconRegistry.addSvgIcon(
        'arrow-up',
        sanitizer.bypassSecurityTrustResourceUrl('assets/arrow-up.svg'));
	iconRegistry.addSvgIcon(
        'arrow-down',
        sanitizer.bypassSecurityTrustResourceUrl('assets/arrow-down.svg'));
  }

  ngOnInit() {
  	this.activatedRoute.queryParams
  		.subscribe((params: Params) => {
  			this.query = params['query'];
  			this.filter = params['filter'];
  			this.generateFilter();
  		});
  }

  submit(): void {
  	this.router.navigate(['/search'], {queryParams: {query: this.query, filter: this.filter}});
  	this.generateFilter();
  }

  generateSort(sort: string): void{
    this.router.navigate(['/search'], {queryParams: {query: this.query, filter: this.filter}});
  }

  generateFilter(): void {
  	this.filter = JSON.stringify([{column: "name", operator: "contains", value: this.query}]);
  }

}
