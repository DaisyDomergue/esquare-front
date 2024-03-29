import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { PaymentComponent } from './payment/payment.component';
import { StudentPortalComponent } from './student-portal/student-portal.component';
import { TeacherRegisterComponent } from './teacher-register/teacher-register.component';
import { StudentGuard } from './guards/student.guard';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { MaterialsComponent } from './materials/materials.component';
const routes: Routes = [
  {
    path:'',component:SigninComponent
  },
  {
    path:'sign-in',component: SigninComponent
  },
  {
    path:'payment',component: PaymentComponent
  },
  {
    path:'student-portal',canActivate:[StudentGuard],component: StudentPortalComponent
  },
  {
    path:'students',component: StudentListComponent
  },
  {
    path:'register-student',component:StudentComponent
  },
  {
    path:'register-teacher',component:TeacherRegisterComponent
  },
  {
    path:'teacher-portal',canActivate:[StudentGuard],component:TeacherComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'teachers',component:TeacherListComponent
  },
  {
    path:'register-admin',component:RegisterAdminComponent
  },
  {
    path:'study-material',component:MaterialsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
