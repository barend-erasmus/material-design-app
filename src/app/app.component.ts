import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(protected snackBar: MatSnackBar) {}

  public ngOnInit(): void {
    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();

      this.snackBar
        .open('Volvo Ocean Race', 'Add to Home Screen')
        .onAction()
        .subscribe(() => {
          (event as any).prompt();
        });
    });
  }
}
