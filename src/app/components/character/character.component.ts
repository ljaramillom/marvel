import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../shared/models/character.model';
import { ComicService } from '../../services/comic/comic.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input()character: Character;
  showModal: boolean;
  comics: any;
  textButton: string;

  constructor(public comicService: ComicService) { }

  ngOnInit() {
    this.textButton = 'ADD TO FAVOURITES';
  }

  // Petición al servicio para obtener comic por Id
  getComic(charId: number) {
    this.comics = this.comicService.getComic(charId);
    this.comicService.comicId$.subscribe((comics: any) => {
      this.comics = comics;
    });
  }

   // Abrir-Cerrar modal
   public openModal(url) {
    const arrayUrl = url.split('/');
    const comicId = parseInt(arrayUrl[arrayUrl.length - 1]);
    this.getComic(comicId);
    if (0) {
      this.showModal = false;
    } else {
       this.showModal = true;
    }
  }

  public changeText(text: string) {
    this.textButton = text;
  }

}
