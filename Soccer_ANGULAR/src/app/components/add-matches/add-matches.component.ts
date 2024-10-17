import { MatchService } from './../../services/match.service';
import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-matches',
  templateUrl: './add-matches.component.html',
  styleUrls: ['./add-matches.component.css']
})
export class AddMatchesComponent implements OnInit {
  addmatchesForm!: FormGroup;
  match: any = {};
  title='ADD MATCHES'
  matchesTab:any =[];

  constructor(private matchService: MatchService, private router:Router) { }

  ngOnInit() {  
   
  this.matchService.getAllMatches().subscribe((res:any)=>{
    this.matchesTab = res;
  });
  }
  addMatches() { 
     console.log("here match", this.match);
     this.matchService.addMatch(this.match).subscribe();
     // let T= JSON.parse(localStorage.getItem("matches") || "[]")
    // let matchesId =JSON.parse(localStorage.getItem("matchesID") || "0")
    // this.match.id = matchesId 
    // T.push(this.match)
    // localStorage.setItem("matches", JSON.stringify(T))
    // localStorage.setItem("matchId", JSON.stringify(matchesId+1))  
  
    // this.router.navigate(['/matches'])

  }

}
 

