import { Component, Input, OnInit } from '@angular/core';

import { Update } from '../_models/update';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogContent } from '../_models/dialog-content';
import { MdDialog } from '@angular/material';
import { UpdateService } from './update.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  providers: [UpdateService]
})
export class UpdateComponent implements OnInit {
	@Input()
  	updates: Update[];
  	dialogContent = new DialogContent();

	constructor(private updateService: UpdateService, private dialog: MdDialog) { }

	viewUpdate(id: number): void {
		this.updateService.getUpdate(id)
			.subscribe((update: Update) => {
				this.dialogContent.title = update.name;
				this.dialogContent.body = update.description;
				this.dialog.open(DialogComponent, {data: this.dialogContent, width:'80%'});
			});
		
	}


	ngOnInit(): void {
	}
}