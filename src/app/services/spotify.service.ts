import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }
  getQuery( query: string ) {
  const url = `https://api.spotify.com/v1/${ query }`;
  const headers = new HttpHeaders({
    'Authorization': 'Bearer BQCA-zubH1fxrT6qXLSHYxUYeMDIDptIAx5sKZgGlxx_bZvmBg1HIWG41KG4TNOTXISCjuY5vMKWA2GTlxI'
  });
  return this.http.get(url, {headers});
  }
  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
                .pipe(map( (resp) => resp['albums'].items));

  }

  getArtist( term: string){
    return this.getQuery(`search?q=${ term }&type=artist&limit=15`)
                      .pipe(map( (resp) => resp['artists'].items));

  }
}
