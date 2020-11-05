import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {

  characteres: any;
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
