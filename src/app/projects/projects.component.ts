import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Project } from '../project';
import { ProjectService } from '../project.service';
import { TaskService } from '../task.service';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private projectService: ProjectService,
    private taskService: TaskService,
    public modal: MatDialog
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
  }

  openModal(): void {
    this.modal.open(TaskComponent, {autoFocus: false});
  }
}
