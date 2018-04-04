import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
import * as _ from 'lodash';

@Injectable()
export class UserSettings {

    constructor(private storage: Storage,
                private events: Events) { }

    favoriteTeam(team, tournamentId, tournamentName){
        let item = { team: team, tournamentId: tournamentId, tournamentName: tournamentName };
        console.log('KEY', item);
        this.storage.set(team.id, JSON.stringify(item));
        this.events.publish('favorites:changed');
    }

    unfavoriteTeam(team){
        this.storage.remove(team.id);
        this.events.publish('favorites:changed');
    }

    isFavoriteTeam(teamId){
        return this.storage.get(teamId).then(value => value ? true : false);
    }

    getAllFavorites(){
        let items = [];
        this.storage.forEach((v,k,i) => {
          // console.log("This is the value", v)
	        // console.log("from the key", k)
	        // console.log("Index is", i)
          items.push(JSON.parse(v));
        });
        //console.log("All Items", items.length);
        return items;
      }

}
