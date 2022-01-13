import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../shared/student.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TeacherService } from '../shared/teacher.service';
import { Admin } from '../shared/admin.model';
import { AdminService } from '../shared/admin.service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor(
    private studentService: StudentService,
    private teacherService: TeacherService,
    private adminService: AdminService,
    private router: Router,
    private http: HttpClient
  ) {}

  user_name: String;
  password: String;

  ngOnInit(): void {}
  userChanged($event) {
    this.user_name = $event.target.value;
  }
  passwordChanged($event) {
    this.password = $event.target.value;
  }

  async onSubmit(form: NgForm) {
    try {
      const body = JSON.stringify({
        user_name: this.user_name,
        password: this.password,
      });
      const headers = { 'content-type': 'application/json' };
      this.http
        .post('http://192.168.202.55:3000/login', body, { headers: headers })
        .subscribe((res) => {
        
          if(res['message']=='Invalid username or password')
          {
            alert(res['message']);
          }
          else if ((res['type'] == 'student')) {
            localStorage.setItem('type', res['type']);
            this.studentService.storeStudent(this.user_name);
            this.router.navigate(['student-portal']);
            
          }
          else if((res['type']== 'teacher'))
          {
            localStorage.setItem('type', res['type']);
            this.teacherService.storeTeacher(this.user_name);
            this.router.navigate(['teacher-portal']);
          }
          else if((res['type']== 'admin'))
          {
            localStorage.setItem('type', res['type']);
            this.adminService.storeAdmin(this.user_name);
            this.router.navigate(['students']);
          }
        });
    } catch (err) {
      console.log(err);
    }

    // const result= await fetch('localhost:3000')

    //this.router.navigate(['payment']);
  }
}
