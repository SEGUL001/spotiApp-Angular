import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getQuery ( query: string) {
    const URL = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDCVFtgdPm6xsURl3KQqxAzisFOuKidhgUOaCrbrEPfOmibwcrSeqmMA3eGpKx6KpK4nPv3nGx1_nL94oo'
    });

    return this.http.get(URL,{headers});
  }


  getNewReleases(){
    return this.getQuery('browse/new-releases')
      .pipe( map ( data =>  data['albums'].items ));    
  }

  getArtistas( termino:string) {    
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe( map ( data => data['artists'].items));   
  }

  getArtista ( idx : string) {
    return this.getQuery(`artists/${idx}`);
  }

}
