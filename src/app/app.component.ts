import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public snackBar: MatSnackBar) {
    snackBar.open('Volvo Ocean Ocean', 'Add to Home Screen').onAction().subscribe(() => {
      (window as any).beforeInstallPromptEvent.prompt();
    });
  }
}
