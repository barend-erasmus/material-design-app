import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatTableModule,
  MatSnackBar,
  MatSnackBarModule,
} from '@angular/material';
import { TeamsComponent } from './teams/teams.component';
import { BoatComponent } from './boat/boat.component';
import { AppRoutingModule } from './app-routing.module';
import { TeamComponent } from './team/team.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SafeResourceURLPipe } from './safe-resource-url.pipe';
import { SafeHTMLPipe } from './safe-html.pipe';

@NgModule({
  declarations: [AppComponent, TeamsComponent, BoatComponent, TeamComponent, SafeResourceURLPipe, SafeHTMLPipe],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      scope: '/material-design-app/dist/material-design-app',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
