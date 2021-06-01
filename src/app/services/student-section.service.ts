import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import {StudentSection} from '../models/student-section';

@Injectable({
  providedIn: 'root'
})
export class StudentSectionService {
  selectedStudent : StudentSection;
  student: StudentSection[];

  readonly URL_API = 'http://hp-api.herokuapp.com/api/characters/students';
  constructor(private http: HttpClient) {
    this.selectedStudent = new StudentSection();
  }
  getcheStudent(): Observable<any>{
    return this.http.get(this.URL_API);
}
}
