import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
playerURL:string="http://localhost:4000";
  constructor(private http :HttpClient) { }

  addPlayer(){}
  getAllPlayer(){}
  getPlayersById(){}
  deletePlayer(){}
  deletePlayerById(){}


}
