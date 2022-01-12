import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../shared/teacher.service';
import { Teacher } from '../shared/teacher.model';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  constructor(public teacherService:TeacherService) { }

  ngOnInit(): void {
    this.refreshTeacherList();
  }
  refreshTeacherList()
  {
    this.teacherService.getTeacherList().subscribe((res)=>{
      //console.log(res);
      this.teacherService.teachers=res as Teacher[];
      console.log("teachers",this.teacherService.teachers);
    });
  }
  assignSection(teacherid:String,section:string)
  {
    this.teacherService.assignTeacher(teacherid,section).subscribe((res)=>{
      console.log(res);
    })
  }
  handleSectionChange(event:any,stdid:String){
    this.assignSection(stdid,event.target.value);
  }
  editTeacher(id:String)
  {
    console.log(id);
  }
  deleteTeacher(id: String) {
    if (confirm('Are you sure about delete this teacher')) {
      this.teacherService.deleteTeacher(id).subscribe((res) => {
        this.refreshTeacherList();
      });
    }
  }

}
