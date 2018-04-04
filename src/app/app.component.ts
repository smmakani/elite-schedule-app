import { Component, ViewChild } from '@angular/core';
import { Events, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoadingController } from 'ionic-angular';
import {  MyTeamsPage } from '../pages/my-teams/my-teams';
import {  TournamentsPage } from '../pages/tournaments/tournaments';
import { UserSettings } from '../providers/user-settings.service';
import { EliteApiServiceProvider } from '../providers/elite-api-service/elite-api-service';
import { TeamHomePage } from '../pages/team-home/team-home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  favoriteTeams = [];
  rootPage: any = MyTeamsPage;


  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private eliteApi: EliteApiServiceProvider,
    private loadingController: LoadingController,
    private userSettings: UserSettings,
    private events: Events ) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.refreshFavorites();

      this.events.subscribe('favorites:changed', () => this.refreshFavorites());
    });
  }
  goHome(){
    this.nav.push(MyTeamsPage);
  }

  refreshFavorites(){
    this.favoriteTeams = this.userSettings.getAllFavorites();
    //console.log("Favorite Teams", this.userSettings.getAllFavorites())
  }

  goToTeam(favorite){
    let loader = this.loadingController.create({
        content: 'Getting data...',
        dismissOnPageChange: true
    });
    loader.present();
    this.eliteApi.getTournamentData(favorite.tournamentId)
      .subscribe(l => this.nav.push(TeamHomePage, favorite.team));
  }

  goToTournaments(){
    this.nav.push(TournamentsPage);
  }
}
