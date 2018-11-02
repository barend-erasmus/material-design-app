import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITeam } from '../models/team';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  public team: ITeam = null;

  constructor(protected activatedRoute: ActivatedRoute, protected teamsService: TeamsService) {}

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.team = this.teamsService.find(params.name);
    });
  }
}
