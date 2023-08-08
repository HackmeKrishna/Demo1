import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HOMEComponent } from './home/home.component';
import { ADDSTUDENTComponent } from './addstudent/addstudent.component';
import { HelpsComponent } from './helps/helps.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'',redirectTo:'/HOME',pathMatch:'full'},
  {path:'ADDSTUDENT',component:ADDSTUDENTComponent},
  {path:'HOME',component:HOMEComponent},
  {path:'ABOUT',component:AboutComponent},
  {path:'STUDENTDATA',component:StudentListComponent},
  {path:'HELPS',component:HelpsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
