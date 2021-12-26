
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { StudentService } from '../shared/student.service';

declare var M: any;

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers:[StudentService]
})
export class StudentComponent implements OnInit {

  constructor(public studentService:StudentService, 
            private router:Router) {
    this.studentService.selectedStudent={
      _id:"",
      first_name:"",
      last_name:"",
      date_of_birth:new Date(),
      level:"",
      parent_name:"",
      parent_id_no:"",
      parent_phone_no:"",
      user_name:"",
      user_password:"",
      parent_email:"",
    }
   }
  
  levels = ["Level 1","Level 2","Level 3"];
  
  ngOnInit(): void {
  }

  onSubmit(form : NgForm)
  {
    
    //console.log(form.value);
    this.studentService.postStudent(form.value).subscribe((res)=>{
      console.log(res);
      if(res['message']=="Student Created Successfully")
      {
        M.toast({html:'Registered successfuly.', classes:'rounded'});
        this.router.navigate(['payment']);
      }
      else{
        M.toast({html:'Registered successfuly.', classes:'rounded'});
      }
     
    });
  }

}
