import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css'],
})
export class MatchesTableComponent implements OnInit {
  matchesTab: any = [];
  matchesService: any;

  constructor(private router: Router, private matchService: MatchService) {}

  ngOnInit() {
    this.matchesService.getAllMatches().subscribe((res: any) => {
      this.matchesTab = res;
    });
  }
  goToEdit(id: any) {
    this.router.navigate(['editMatch/' + id]);
  }
  goToDelete(id: any) {
    this.router.navigate(['deleteMatch/' + id]);
  }
  goToDisplay(id: any) {
    this.router.navigate(['matchInfo/' + id]);
  }
  deleteMatch(id: any) {
    this.matchService.deleteMatchById(id).subscribe((res) => {
      console.log('here res after delete', res);
    });
  }
}
