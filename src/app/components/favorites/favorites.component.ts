import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character/character.service';
import { Character } from '../../shared/models/character.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
