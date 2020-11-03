import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character/character.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  query: string;

  constructor(public characterService: CharacterService) { }

  ngOnInit() {
  }

  queryCharacter() {
    if (this.query) {
      this.characterService.getCharacter(this.query).subscribe();
    }
  }

}
