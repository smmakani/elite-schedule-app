import { Http, Response } from '@angular/http';
// import { HttpClient  } from '@angular/common/http'
import { Injectable } from '@angular/core';
import 'rxjs';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the EliteApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EliteApiServiceProvider {

  private baseUrl = "https://elite-schedule-app-9da8f.firebaseio.com"
  currentTourney: any;
  constructor(private http: Http) {
    // console.log('Hello EliteApiServiceProvider Provider');
  }

  getTournaments(){
    return new Promise(resolve => {
        this.http.get(`${this.baseUrl}/tournaments.json`)
            .subscribe(res => resolve(res.json()))
          });
  }

  getTournamentData(tourneyId): Observable<any> {
    return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
      .map((response: Response) => {
        this.currentTourney = response.json();
        return this.currentTourney;
       });

    }

    getCurrentTourney(){
      return this.currentTourney;
    }

}
