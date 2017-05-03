import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { Card } from '../_models/card';
import { CardService } from './card.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [CardService]
})
export class CardComponent implements OnInit, OnChanges {
	@Input()
  	amount: number = 4;

	@Input()
  	sort: string = JSON.stringify([{column:"id", order:"desc"}]);

  	@Input()
  	filter: string = JSON.stringify([{column:"description", operator:"isnotnull"}]);

	@Input()
  	page: number = 1;

	@Input()
	columns: number = 4;

	cards: Card[];

	constructor(private cardService: CardService) { }

	getCards(): void {
		this.cardService.getCards(this.amount, this.sort, this.filter, this.page).subscribe(result => this.cards = result);
	}

	ngOnInit(): void {
		this.getCards();
	}

	ngOnChanges(changes: SimpleChanges) {
		for (let change in changes){
			if (change == "filter"){
				this.filter = changes.filter.currentValue;
			}
		}

		this.getCards();
	}

}
