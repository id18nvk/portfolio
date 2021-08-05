import { Component, OnInit } from '@angular/core';
import { IProject } from './project';
import { ProjectService } from './project.service';


@Component({
  selector: 'app-project-prev',
  templateUrl: './project-prev.component.html',
  styleUrls: ['./project-prev.component.scss']
})
export class ProjectPrevComponent implements OnInit {

  projects: IProject[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProducts();
  }

}
