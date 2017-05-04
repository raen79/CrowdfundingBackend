import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location } from '@angular/common';

import { Project } from '../_models/project';
import { ProjectViewService } from './project-view.service';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss'],
  providers: [ProjectViewService],
})

export class ProjectViewComponent implements OnInit {

      project : Project;

	constructor(
		private projectService: ProjectViewService,
		private route: ActivatedRoute,
		private location: Location
	) { }


	ngOnInit() {
    		this.route.params.subscribe((params: Params) => this.getProject(+params['id']));
  	}

  	getProject(id: number): void {
  		this.projectService.getProject(id).subscribe((project: Project) => this.project = project);
  	}

}
