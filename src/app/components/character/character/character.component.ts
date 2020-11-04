import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../../shared/models/character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input()character: Character;
  lorem: string;
  showModal: boolean;

  constructor() { }

  ngOnInit() { 
    this.lorem = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore mollitia dolorum optio dolore doloribus consequuntur.';
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
