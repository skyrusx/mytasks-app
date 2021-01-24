import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Project } from './project';

@Injectable({ providedIn: 'root' })
export class ProjectService {

  private baseUrl = 'https://app-mytasks.herokuapp.com';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  /** GET projects from the server */
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl + '/projects');
  }

  /** PUT: update the task on the server */
  updateTask(task: any): Observable<any> {
    const urlPart = [this.baseUrl, 'projects', task.project_id, 'todos', task.id].join('/');
    const url = `${urlPart}?is_completed=${task.is_completed}`;
    return this.http.put(url, task, this.httpOptions);
  }
}
