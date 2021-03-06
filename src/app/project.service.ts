import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Project } from './project';

@Injectable({ providedIn: 'root' })
export class ProjectService {

  private baseUrl = environment.baseUrl;
  private projectUrl = this.baseUrl + '/projects';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  /** GET projects from the server */
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectUrl);
  }

  /** POST: add a new project to the server */
  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.projectUrl, project, this.httpOptions);
  }
}
