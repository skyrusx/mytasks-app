import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'Задачи';

  constructor(public modal: MatDialog) {}

  openModal() {
    this.modal.open(TaskComponent, {autoFocus: false});
  }
}
