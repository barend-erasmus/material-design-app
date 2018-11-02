import { Component, OnInit } from '@angular/core';
import { ITeam } from '../models/team';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {
  public teams: Array<ITeam> = [];

  constructor(protected teamsService: TeamsService) {}

  public ngOnInit(): void {
    this.teams = this.teamsService.findAll();
  }
}
