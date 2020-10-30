import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterService } from '../../services/character/character.service';
import { Character } from './models/character.model';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characteres: Character;

  constructor(public characterService: CharacterService ) { }

  ngOnInit() {
    this.getCharacteres();
  }

  // Petición al servicio para obtener el listado de todos los personajes
  getCharacteres() {
    this.characterService.getAllCharacters().subscribe(
      (resp) => {
        this.characteres = resp;
      },
      (error) => {
        console.log(error);
      });
  }

}
