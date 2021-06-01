import { Component, OnInit } from '@angular/core';
import { TeacherSectionService } from '../../services/teacher-section.service';
import {FormsModule} from '@angular/forms';
 
@Component({
  selector: 'app-teacher-section',
  templateUrl: './teacher-section.component.html',
  styleUrls: ['./teacher-section.component.css']
})
export class TeacherSectionComponent implements OnInit {
  data: [];
  currentYear: Date;
  year: any;
  constructor(private TeacherSectionService: TeacherSectionService) { }
  filterPost = "";
  ngOnInit() {
    this.currentYear = new Date();
    this.year = this.currentYear.getFullYear();
    this.TeacherSectionService.getcheTeacher().subscribe(data => {
      this.data = data;
    });
  }

}
