import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatTableModule } from '@angular/material';
import { TeamsComponent } from './teams/teams.component';
import { BoatComponent } from './boat/boat.component';
import { AppRoutingModule } from './app-routing.module';
import { SafePipe } from './safe.pipe';
import { TeamComponent } from './team/team.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, TeamsComponent, BoatComponent, SafePipe, TeamComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatToolbarModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
