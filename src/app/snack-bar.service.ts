import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) { }

  show(content: string): void {
    this.snackBar.open(content, '', { duration: 3000 });
  }
}
