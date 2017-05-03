import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { MdSnackBar } from '@angular/material';

import { Donation } from '../_models/donation';
import { DonateService } from './donate.service';

@Component({
  selector: 'app-donate-view',
  templateUrl: './donate-view.component.html',
  styleUrls: ['./donate-view.component.css'],
  providers: [DonateService],
})
export class DonateViewComponent implements OnInit {

	donation : Donation;
	project_id : number;

  constructor(	private donateService: DonateService, private route: ActivatedRoute, private router: Router, private snackBar: MdSnackBar) { }

  ngOnInit() {
  	this.route.params
  		.subscribe((params: Params) => {
  			this.donation = new Donation(+params['id']);
  			this.project_id = +params['id'];
  		});
  }

  donate(form: any) {
  	this.donateService.donate(this.donation)
  		.subscribe((result: boolean) => {
  			if (result === true){
  				this.router.navigate(['/project', this.project_id]);
  				this.snackBar.open("You have successfully donated " + this.donation.amount + " GBP to this project!", 'OK', {duration: 10000});
  				form.reset();
  			}
  		});
  }

}
