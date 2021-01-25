import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Project } from '../project';
import { Task } from '../project';
import { ProjectService } from '../project.service';
import { TaskService } from '../task.service';
import { TaskComponent } from '../task/task.component';
import { SnackBarService } from '../snack-bar.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  project: Project = {} as Project;
  task: Task = {} as Task;

  constructor(
    private projectService: ProjectService,
    private taskService: TaskService,
    public modal: MatDialog,
    private snackBar: SnackBarService
  ) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

  updateTask(event: any, task: any): void {
    task.is_completed = event.checked;
    this.taskService.updateTask(task).subscribe();
    if (task.is_completed) {
      this.snackBar.show('Задача выполнена!');
    }
  }

  openModal(): void {
    this.modal.open(TaskComponent, {autoFocus: false});
  }

  trackByFn(index: number, project: Project): number {
    return project.id;
  }

  trackByFnT(index: number, task: Task): number {
    return task.id;
  }
}
