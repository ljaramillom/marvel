import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  KEY_PUBLIC = '745fbdaefc1b25927cbd8c6221c62570';
  HASH = '745FA700C4E84053B120BAFD7A283E82';
  URL_API = `https://gateway.marvel.com:443/v1/public/comics?dateDescriptor=nextWeek&limit=3&`;
  favoriteId$: Observable<any>;
  private filterSubject: Subject<any>;

  constructor(private http: HttpClient) {
    this.filterSubject = new Subject<any>();
    this.favoriteId$ = this.filterSubject.asObservable(); }

    // Método para obtener una lista de comics favoritos
    getFavorites() {
      const URL = `${this.URL_API}apikey=${this.KEY_PUBLIC}&hash=${this.HASH}`;
      return this.http.get(URL).subscribe(
        (resp: any) => {
          this.filterSubject.next(resp.data.results);
        },
        (error) => { }
      );
    }
}
