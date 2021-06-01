import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: 'root'
})
export class CharacterSectionService {
  readonly URL_API = 'http://hp-api.herokuapp.com/api/characters/house';
  constructor(private http: HttpClient) { }

  getcheCharacter(value): Observable<any> {
    return this.http.get(this.URL_API + `/${value}`);
  }
}
