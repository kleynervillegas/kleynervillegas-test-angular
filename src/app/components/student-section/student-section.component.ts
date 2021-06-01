import { Component, OnInit } from '@angular/core';
import { StudentSectionService } from '../../services/student-section.service';
import { StudentSection } from '../../models/student-section';
import { DomSanitizer } from '@angular/platform-browser';

import { NgForm } from '@angular/forms';
declare var M: any;

@Component({
selector: 'app-student-section',
templateUrl: './student-section.component.html',
styleUrls: ['./student-section.component.css']
})
export class StudentSectionComponent implements OnInit {
previsualizacion: string;
public archivos: any = [];
data: any;
currentYear: Date;
year: any;
miStorage: any;
datos: any = [];
valueForm: any = [];


constructor(private sanitizer: DomSanitizer, private StudentSectionService: StudentSectionService) { }
filterPost = "";
ngOnInit() {
  this.currentYear = new Date();
  this.year = this.currentYear.getFullYear();
  this.StudentSectionService.getcheStudent().subscribe(data => {
    this.data = data;

  });
}

Addstudent(form: NgForm) {
  this.miStorage = window.localStorage;
  // localStorage.clear();
  if (form.value.name == "") {
    M.toast({ html: 'enter your name' });
    return false;
  }
  if (form.value.patronus == "") {
    M.toast({ html: 'enter your patronus' });
    return false;
  }
  if (form.value.age == "") {
    M.toast({ html: 'enter your age' });
    return false;
  }
  if (form.value.image == "") {
    M.toast({ html: 'load your image' });
    return false;
  }
  this.data.unshift(form.value);
  this.data[0]['previsualizacion']= this.previsualizacion
  //////////////////////
  // for (let clave in this.data) {
  //     this.data[clave]['previsualizacion']= this.previsualizacion
  //   }
  // console.log(this.previsualizacion);
  M.toast({ html: 'student saved successfully' });

  //////////////// ya no guarda en miStorage
  // if(this.miStorage.student){
  //   this.datos = JSON.parse(this.miStorage.student)
  //   this.datos.push(form.value); 
  //   window.localStorage.setItem('student', JSON.stringify( this.datos)); 
  // }else{
  //   this.valueForm.push(form.value);  
  //   window.localStorage.setItem('student', JSON.stringify(this.valueForm));
  // }
  // //  console.log( this.miStorage);
  // M.toast({ html: 'student saved successfully' });
}

///////////////////////////////////////
capturarFile(event): any {
  const archivoCapturado = event.target.files[0]
  this.extraerBase64(archivoCapturado).then((imagen: any) => {
    this.previsualizacion = imagen.base;
    // console.log(this.previsualizacion);

  })
  this.archivos.push(archivoCapturado)
}
extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
  try {
    const unsafeImg = window.URL.createObjectURL($event);
    const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
    const reader = new FileReader();
    reader.readAsDataURL($event);
    reader.onload = () => {
      resolve({
        base: reader.result
      });
    };
    reader.onerror = error => {
      resolve({
        base: null
      });
    };

  } catch (e) {
    return null;
  }
})

}
