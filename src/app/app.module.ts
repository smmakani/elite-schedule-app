import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyTeamsPage } from '../pages/my-teams/my-teams';
import { TournamentsPage } from '../pages/tournaments/tournaments';
import { TeamDetailPage } from '../pages/team-detail/team-detail';
import { GamePage} from '../pages/game/game';
import { TeamsPage } from '../pages/teams/teams';
import { StandingsPage} from '../pages/standings/standings';
import { TeamHomePage } from '../pages/team-home/team-home';
import { MapPage } from '../pages/map/map';
import { EliteApiServiceProvider } from '../providers/elite-api-service/elite-api-service';
import { IonicStorageModule } from '@ionic/storage';
import { UserSettings } from '../providers/user-settings.service';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamDetailPage,
    GamePage,
    TeamsPage,
    StandingsPage,
    TeamHomePage,
    MapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({name: '__mydb',
    driverOrder: ['indexeddb', 'sqlite', 'websql']}),
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCvErsozUCJkop-_TB8n3HfwNy0ZUHQgG4'

    })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamDetailPage,
    GamePage,
    TeamsPage,
    StandingsPage,
    TeamHomePage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EliteApiServiceProvider,
    UserSettings,
    Storage
  ]
})
export class AppModule {}
