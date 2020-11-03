import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character/character.service';
import { Character } from '../../shared/models/character.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  characteres: Character;

  constructor(public characterService: CharacterService) { }

  ngOnInit() {
    this.getCharacteres();
  }

    // Petición al servicio para obtener el listado de todos los personajes
    getCharacteres() {
      this.characterService.getAllCharacters().subscribe(
        (resp) => {
          this.characteres = resp;
          console.log('resp favorites', resp);
        },
        (error) => {
          console.log(error);
        });
    }

}
