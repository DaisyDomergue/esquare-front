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
    this.refreshStudentList();
  }

  refreshStudentList()
  {
    this.studentService.getStudentList().subscribe((res)=>{
      //console.log(res);
      this.studentService.students=res as Student[];
    });
  }
  assignSection(studentid:String,section:string)
  {
    this.studentService.assignStudent(studentid,section).subscribe((res)=>{
      console.log(res);
    })
  }
  handleSectionChange(event:any,stdid:String){
    this.assignSection(stdid,event.target.value);
  }
  deleteStudent(id:String)
  {
    if(confirm("Are you sure about delete this student"))
    {
      this.studentService.deleteStudent(id).subscribe((res)=>{
        this.refreshStudentList();
      });

    }
  
   
  }
  editStudent(id:String)
  {
    console.log(id);
  }
}
