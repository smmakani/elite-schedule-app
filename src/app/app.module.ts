import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyTeamsPage } from '../pages/my-teams/my-teams'
import { TournamentsPage } from '../pages/tournaments/tournaments'
import { TeamDetailPage } from '../pages/team-detail/team-detail'
import { GamePage} from '../pages/game/game'
import { TeamsPage } from '../pages/teams/teams'

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamDetailPage,
    GamePage,
    TeamsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamDetailPage,
    GamePage,
    TeamsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
