import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import { CharacterSectionComponent } from './components/character-section/character-section.component';
import { StudentSectionComponent } from './components/student-section/student-section.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TeacherSectionComponent } from './components/teacher-section/teacher-section.component';
import * as forms from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CharacterSectionComponent,
    StudentSectionComponent,
    NavbarComponent,
    TeacherSectionComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
