import { Component, OnInit, Input } from '@angular/core';

import 'rxjs/add/operator/switchMap';
import { MdSnackBar } from '@angular/material';
import { ActivatedRoute, Params, Router }   from '@angular/router';

import { Project } from '../_models/project';
import { ProjectFormService } from './project-form.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css'],
  providers: [ProjectFormService]
})
export class ProjectFormComponent implements OnInit {

 error = {subject: "", message: ""};

 @Input() 
 project: Project = new Project();
 @Input()
 formType: string = "new";

  constructor(private projectFormService: ProjectFormService, private route: ActivatedRoute, private router: Router, private snackBar: MdSnackBar) { }

  ngOnInit() {
  }

  submit(form: any): void{
  	if (this.formType == "new"){
  		this.projectFormService.new(this.project)
  			.subscribe(id => {
  				form.reset();
  				this.router.navigate(['/project', id]);
  				this.snackBar.open("Project Created!", 'OK', {duration: 10000});
  			},
  			error => {
  				this.errorHandling(error._body);
  			});
  	}
  	else if (this.formType == "update"){
  		this.projectFormService.update(this.project)
  			.subscribe(id => {
  				form.reset();
  				this.router.navigate(['/project', id]);
  				this.snackBar.open("Project Updated!", 'OK', {duration: 10000});
  			},
  			error => {
  				this.errorHandling(error._body);
  			});
  	}
  }

  errorHandling(error: any){
  	this.error = {subject: "", message: ""};
      let jsonCause = JSON.parse(error).cause;
      let jsonError = JSON.parse(error).error;

      this.error.subject = jsonCause;
      if (jsonError == "length"){
      	if (jsonCause == "name"){
      		this.error.message = "Name must be at least 3 characters";
      	}
      	else if (jsonCause == "description"){
      		this.error.message = "Description must be at least 300 characters";
      	}
      	else if (jsonCause == "funding_goal"){
      		this.error.message = "Funding goal must be at least 10 GBP";
      	}
      }
      else if (jsonError == "uniqueness"){
      	this.error.message = "Name is already taken";
      }
  }

}