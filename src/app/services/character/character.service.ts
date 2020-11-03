import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from '../../shared/models/character.model';

@Injectable({
  providedIn: "root",
})
export class CharacterService {

  query: string;
  response: Character;
  KEY_PUBLIC = 'a0e9170944529ad94ef26f5e5bd6c0b4';
  HASH = 'B9FFC290E8AF470961C5566A0559DAB1';
  URL_API = `https://gateway.marvel.com:443/v1/public/characters`;

  constructor(private http: HttpClient) {}

  // Método para obtener todos los personajes
  getAllCharacters(): Observable<any> {
    const URL = `${this.URL_API}?apikey=${this.KEY_PUBLIC}&hash=${this.HASH}`;
    return new Observable((observer: any) => {
      this.http.get(URL).subscribe(
        (resp: any) => {
          this.response = resp.data.results;
          observer.next(this.response);
        },
        (error) => {
          observer.error(error);
        }
      );
    });
  }

  // Método para buscar personaje por nombre
  getCharacter(value: string) {
    const URL = `${this.URL_API}?name=${value}&apikey=${this.KEY_PUBLIC}&hash=${this.HASH}`;
    return this.http.get(URL).pipe(
      map((resp: any) => {
        console.log(resp);
        return resp;
      })
    );
  }
}
