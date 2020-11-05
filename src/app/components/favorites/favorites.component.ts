import { Component, OnInit } from '@angular/core';
import { Comic } from '../../shared/models/comic.model';
import { FavoriteService } from '../../services/favorite/favorite.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favorites: Comic;

  constructor(public favoriteService: FavoriteService) { }

  ngOnInit() {
    this.getFavorites();
    this.favoriteService.favoriteId$.subscribe((data: any) => {
      this.favorites = data;
    });
  }

  // Petición al servicio para obtener personajes
  getFavorites() {
    this.favoriteService.getFavorites();
  }

}
