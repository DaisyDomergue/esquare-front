import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../shared/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(public teacherService:TeacherService) { }

  ngOnInit(): void {
  }
  first_name="";
  last_name="";
  level="";
  section="";
  getStudent()
  {
    this.teacherService.getTeacher().subscribe((res) => {
      //console.log(res);
      this.first_name=res["first_name"];
      this.last_name=res["last_name"];
      this.level=res["level"];
      this.section=res["section"];

      console.log(this.level,this.section);

      //this.studentService.students = res as Student[];
    });
  }

}
