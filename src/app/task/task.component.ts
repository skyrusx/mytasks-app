import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  projects: Project[] | undefined;
  addTaskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService
  ) {
    this.addTaskForm = this.fb.group({
      text: [null, Validators.required],
      is_completed: [false],
      project_id: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.getProjects();
  }

  onSubmit(): void {
    this.projectService.addTask(this.addTaskForm.value)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }

  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }
}
