import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { MatchService } from './../../services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css'],
})
export class EditMatchComponent implements OnInit {
  id: any;
  findedMatch: any;
  editMatchForm!: FormGroup;

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
  editMatch() {
    this.matchService.editMatch(this.findedMatch).subscribe((res: any) => {
      console.log('here res after edit', res);
    });
  }
}
