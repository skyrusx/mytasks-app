import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { Project } from '../project';
import { ProjectService } from '../project.service';
import { TaskService } from '../task.service';
import { SnackBarService } from '../snack-bar.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  projects: Project[] = [];
  addTaskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private taskService: TaskService,
    private snackBar: SnackBarService
  ) {
    this.addTaskForm = this.fb.group({
      text: new FormControl('', [Validators.required, Validators.minLength(3)]),
      is_completed: [false],
      project_id: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.getProjects();
  }

  onSubmit(): void {
    this.taskService.addTask(this.addTaskForm.value)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );

    this.snackBar.show('Задача добавлена. Обновите страницу!');
  }

  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

  get form(): any {
    return this.addTaskForm.controls;
  }
}
