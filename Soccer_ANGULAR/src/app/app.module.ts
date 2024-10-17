import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { StatsComponent } from './components/stats/stats.component';
import { BlogComponent } from './components/blog/blog.component';
import { NewsInfoComponent } from './components/news-info/news-info.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import{ReactiveFormsModule,FormsModule}  from '@angular/forms'
import { MatchesComponent } from './components/matches/matches.component';
import { MatchComponent } from './components/match/match.component';
import { BannerComponent } from './components/banner/banner.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { MyFilterPipe } from './pipes/my-filter.pipe';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import{HttpClientModule} from '@angular/common/http';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { TeamsComponent } from './components/teams/teams.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { PlayersComponent } from './components/players/players.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    SignupComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    CupEventComponent,
    ScoreComponent,
    NewsComponent,
    StatsComponent,
    BlogComponent,
    NewsInfoComponent,
    AddMatchComponent,
    MatchesComponent,
    MatchComponent,
    BannerComponent,
    ReversePipe,
    MyFilterPipe,
    DashbordComponent,
    MatchesTableComponent,
    EditMatchComponent,
    MatchInfoComponent,
    TeamsComponent,
    AddTeamComponent,
    PlayersComponent,
    AddPlayerComponent,
    EditPlayerComponent,
    EditTeamComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
