import { MatchService } from 'src/app/services/match.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css'],
})
export class MatchInfoComponent implements OnInit {
  id: any;
  findedMatch: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private matchService: MatchService
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.matchService.getMatchesById(this.id).subscribe((res) => {
      this.findedMatch = res;
    });
  }
}
