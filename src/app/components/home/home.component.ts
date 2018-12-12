import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {
newSongs: any[] = [];
loading: boolean;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.spotify.getNewReleases()
                .subscribe( (resp: any) => {
                  this.newSongs = resp;
                  this.loading = false;
                });
   }



}


