import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: 'root'
})
export class TeacherSectionService {
  readonly URL_API = 'http://hp-api.herokuapp.com/api/characters/staff';

  constructor(private http: HttpClient) { }
  getcheTeacher(): Observable<any> {
    return this.http.get(this.URL_API);
  }
}
