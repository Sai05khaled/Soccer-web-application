import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
teamURL: string="http://localhost:4000";
  constructor(private http: HttpClient) { }

  addTeam(){}
  getAllTeams(){}
  getTeamsById(){}
  deleteTeam(){}
  deleteTeamById(){}
}
