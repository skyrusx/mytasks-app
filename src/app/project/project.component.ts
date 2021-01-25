import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [];
  addProjectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService
  ) {
    this.addProjectForm = this.fb.group({
      title: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  ngOnInit(): void {
    this.getProjects();
  }

  onSubmit(): void {
    this.projectService.addProject(this.addProjectForm.value as Project)
      .subscribe(project => {
        this.projects.push(project);
      });
  }

  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

  get form(): any {
    return this.addProjectForm.controls;
  }
}
