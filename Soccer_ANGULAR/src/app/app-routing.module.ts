import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatchesComponent } from './components/matches/matches.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { TeamsComponent } from './components/teams/teams.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { PlayersComponent } from './components/players/players.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { LoginComponent } from './components/login/login.component';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [
  { path: "" , component: HomeComponent},
  { path: "contact", component: ContactComponent},
  { path:"add-match",component : AddMatchComponent},
  { path:"Signup",component : SignupComponent},
  { path:"matches",component : MatchesComponent},
  { path : "dashabord" , component: DashbordComponent},
  {path : "editMatch/:id",component:EditMatchComponent},
  {path: "matchInfo/:id" , component:MatchInfoComponent},
  {path: "teams" , component:TeamsComponent},
  {path: "add-team" , component:AddTeamComponent},

  {path: "players" , component:PlayersComponent},
  {path: "add-player" , component:AddPlayerComponent},
  {path:"editplayer/:id",component:EditPlayerComponent},
  {path:"editteam/:id",component:EditTeamComponent},
  {path:"login",component:LoginComponent},
  {path:"blog", component:BlogComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
