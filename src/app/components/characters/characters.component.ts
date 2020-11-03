import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character/character.service';
import { Character } from '../../shared/models/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {

  showModal: boolean;
  characteres: Character;
  lorem: string;
  p: any;

  constructor(public characterService: CharacterService) {}

  ngOnInit() {
    this.getCharacteres();
    this.lorem = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore mollitia dolorum optio dolore doloribus consequuntur.';
  }

  // Petición al servicio para obtener el listado de todos los personajes
  getCharacteres() {
    this.characterService.getAllCharacters().subscribe(
      (resp) => {
        this.characteres = resp;
        console.log('resp characteres', resp);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Abrir-Cerrar modal
  public openModal() {
    if (0) {
      this.showModal = false;
    } else {
       this.showModal = true;
    }
  }

}
