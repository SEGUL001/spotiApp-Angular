import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  
  constructor( private route:ActivatedRoute, _spotifyService:SpotifyService) {

      this.route.params.subscribe( params => 
        {
          _spotifyService.getArtista(params['id'])
            .subscribe(  result => {
              console.log(result)
              this.artista = result;
              console.log(this.artista)
            })
        })

   }
   ngOnInit() {  

  }

}
