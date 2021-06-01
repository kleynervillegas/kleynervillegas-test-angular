import { Component, OnInit } from '@angular/core';
import { CharacterSectionService } from '../../services/character-section.service';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
declare var M: any;

@Component({
  selector: 'app-character-section',
  templateUrl: './character-section.component.html',
  styleUrls: ['./character-section.component.css']
})
export class CharacterSectionComponent implements OnInit {
  testForm: FormGroup;
  lista: string[] = ["slytherin", "gryffindor", "ravenclaw", "hufflepuff"];
  data: [];
  currentYear: Date;
  year: any;
  constructor(private CharacterSectionService: CharacterSectionService) { }
  filterPost = "";
  ngOnInit() {
  }

  seachCharacter(event) {
    this.currentYear = new Date();
    this.year = this.currentYear.getFullYear();
    this.CharacterSectionService.getcheCharacter(event.target.value).subscribe(data => {
      this.data = data;
      M.toast({html: 'found character successfully'});
    });
  }
}
