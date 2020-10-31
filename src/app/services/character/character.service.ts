import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_API } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  response: any;

  constructor(private http: HttpClient) { }

  // Método para obtener todos los personajes
  getAllCharacters(): Observable<any> {
    return new Observable((observer: any) => {
      this.http.get(URL_API).subscribe(
        (resp: any) => {
          this.response = resp.data.results;
          observer.next(this.response);
        },
        (error) => {
          observer.error(error);
        });
    });
  }
}