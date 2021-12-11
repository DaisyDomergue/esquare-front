import { Component, OnInit } from '@angular/core';

import { StudentService } from '../shared/student.service';
import { Student } from '../shared/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor( public studentService:StudentService) { }
  //students: Student[];
  ngOnInit(): void {
    this.refreshEmployeeList();
  }
  refreshEmployeeList()
  {
    this.studentService.getStudentList().subscribe((res)=>{
      console.log(res);
      this.studentService.students=res as Student[];
    });
  }
  deleteStudent(id:String)
  {
    this.studentService.deleteStudent(id).subscribe((res)=>{
      this.refreshEmployeeList();
    });
   
  }
  editStudent(id:String)
  {
    console.log(id);
  }
}
