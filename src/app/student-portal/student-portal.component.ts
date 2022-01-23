import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';

@Component({
  selector: 'app-student-portal',
  templateUrl: './student-portal.component.html',
  styleUrls: ['./student-portal.component.css'],
})
export class StudentPortalComponent implements OnInit {
  constructor(public studentService: StudentService) {}
  first_name = '';
  last_name = '';
  level = '';
  section = '';

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent() {
    this.studentService
      .getStudent()
      .pipe(
        (res) => res,
        (err) => {
          alert('You are not authorized');
          return err;
        }
      )
      .subscribe((res) => {
        console.log(res);
        this.first_name = res['first_name'];
        this.last_name = res['last_name'];
        this.level = res['level'];
        this.section = res['section'];

        console.log(this.level, this.section);

        //this.studentService.students = res as Student[];
      });
  }
}
