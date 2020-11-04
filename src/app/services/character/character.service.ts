import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {

  KEY_PUBLIC = 'a0e9170944529ad94ef26f5e5bd6c0b4';
  HASH = 'B9FFC290E8AF470961C5566A0559DAB1';
  URL_API = `https://gateway.marvel.com:443/v1/public/characters`;
  filter$: Observable<any>;
  private filterSubject: Subject<any>;

  constructor(private http: HttpClient) {
    this.filterSubject = new Subject<any>();
    this.filter$ = this.filterSubject.asObservable();
  }

  // Método para obtener personajes
  getAllCharacters() {
    const URL = `${this.URL_API}?apikey=${this.KEY_PUBLIC}&hash=${this.HASH}`;
    return this.http.get(URL).subscribe(
      (resp: any) => {
        this.filterSubject.next(resp.data.results);
      },
      (error) => { }
    );
  }

  // Método para obtener personaje por filtro
    getCharacter(value: string) {
      if (value) {
        const URL = `${this.URL_API}?nameStartsWith=${value}&apikey=${this.KEY_PUBLIC}&hash=${this.HASH}`;
        return this.http.get(URL).subscribe(
          (resp: any) => {
            this.filterSubject.next(resp.data.results);
          },
          (error) => {}
        );
      } else {
        this.getAllCharacters();
      }
    }
}
