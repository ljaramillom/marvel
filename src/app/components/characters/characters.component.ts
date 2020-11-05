import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character/character.service';
import { Character } from '../../shared/models/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {

  characteres: Character;
  p: any;

  constructor(public characterService: CharacterService) {}

  ngOnInit() {
    this.getCharacteres();
    this.characterService.filter$.subscribe((newFilter: any) => {
      this.characteres = newFilter;
    });
   }

  // Petición al servicio para obtener personajes
  getCharacteres() {
    this.characterService.getAllCharacters();
  }

}
