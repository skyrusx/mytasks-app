import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ProjectComponent} from '../project/project.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'Задачи';

  constructor(public modal: MatDialog) {}

  openModal(): void {
    this.modal.open(ProjectComponent, {autoFocus: false});
  }
}
