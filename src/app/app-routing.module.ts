import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { BoatComponent } from './boat/boat.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: '', component: TeamsComponent },
  { path: 'boat', component: BoatComponent },
  { path: 'teams', component: TeamsComponent },

  { path: 'team/:name', component: TeamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
