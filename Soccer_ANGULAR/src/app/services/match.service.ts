import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  getMatchById(id: any) {
    throw new Error('Method not implemented.');
  }
  matchURL: string = 'http://localhost:4000';
  constructor(private http: HttpClient) {}

  addMatch(matchObj: any) {
    return this.http.post(this.matchURL, matchObj);
  }
  getAllMatches() {
    return this.http.get(this.matchURL);
  }
  getMatchesById(id: string) {
    return this.http.get(this.matchURL + '/' + id);
  }
  deleteMatch(id: string) {
    return this.http.delete(this.matchURL + '/' + id);
  }
  deleteMatchById(id: string) {
    return this.http.delete(this.matchURL + '/' + id);
  }
  editMatch(matchObj: any) {
    return this.http.put(this.matchURL + '/' + matchObj.id, matchObj);
  }
}
