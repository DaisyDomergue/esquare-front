import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { StudentPortalComponent } from './student-portal/student-portal.component';
import { PaymentComponent } from './payment/payment.component';
import { TeacherRegisterComponent } from './teacher-register/teacher-register.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import {AuthInterceptor } from './Interceptor'

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentListComponent,
    DashboardComponent,
    SigninComponent,
    StudentPortalComponent,
    PaymentComponent,
    TeacherRegisterComponent,
    TeacherComponent,
    TeacherListComponent,
    RegisterAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
