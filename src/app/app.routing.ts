import { RouterModule, Routes } from '@angular/router';
import { StudentSectionComponent } from './components/student-section/student-section.component';
import { CharacterSectionComponent } from './components/character-section/character-section.component';
import { TeacherSectionComponent } from './components/teacher-section/teacher-section.component';

const appRoutes = [
    {
        path: 'StudentSectionComponent',
        // redirectTo: 'StudentSectionComponent',
        component: StudentSectionComponent,
        pathMatch: 'full'
    },
    {
        path: 'CharacterSectionComponent',
        component: CharacterSectionComponent,
        pathMatch: 'full'       
      },
      {
        path: 'TeacherSectionComponent',
        component: TeacherSectionComponent,
        pathMatch: 'full'       
      },   
];

export const routing = RouterModule.forRoot(appRoutes);
