
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
      section:""
    }
   }
  
  // levels = [{key:"pre_1",value:"Preschool - I"},{key:"pre_2",value:"Preschool - II"},{key:"pre_3",value:"Preschool - III"},{key:"spe_1",value:"Special Education Level - I"},{key:"spe_2",value:"Special Education Level - II"},{key:"accelerated",value:"Accelerated Program"},{key:"care_basic",value:"Caregivers Training Basic"},{key:"care_adv",value:"Caregivers Training Advanced"}];
  levels = [{key:"pre_1",value:"Preschool - I"},{key:"pre_2",value:"Preschool - II"},{key:"pre_3",value:"Preschool - III"},{key:"Grade_1",value:"Grade - I"},{key:"Grade_2",value:"Grade - II"},{key:"spe_1",value:"Special Education Level - I"},{key:"spe_2",value:"Special Education Level - II"},{key:"Holistic_G1",value:"Holistic Program Group - I"},{key:"Holistic_G2",value:"Holistic Program Group - II"},{key:"accelerated_G1",value:"Accelerated Program Group - I"},{key:"accelerated_G2",value:"Accelerated Program Group - II"},{key:"accelerated_G3",value:"Accelerated Program Group - III"},{key:"accelerated_G4",value:"Accelerated Program Group - IV"},{key:"caregivers_basic",value:"Caregivers Training Basic"},{key:"caregivers_adv",value:"Caregivers Training Advanced"}];
  ngOnInit(): void {
  }
  firstnameChange(event:any)
  {
    this.studentService.selectedStudent.user_name=event.target.value;
  }
  lastnameChange(event:any)
  {
    this.studentService.selectedStudent.user_name=this.studentService.selectedStudent.first_name + event.target.value.substring(0,2);
  }
  onSubmit(form : NgForm)
  {
    
    //console.log(form.value);
    this.studentService.postStudent(form.value).subscribe((res)=>{
      console.log(res);
      if(res['message']=="Student Created Successfully")
      {
        M.toast({html:'Registered successfuly.', classes:'rounded'});
        localStorage.setItem('id',res['_id']);
        localStorage.setItem('level', res['level']);
        console.log("this are saved",localStorage.getItem("id"),localStorage.getItem("level"));
        this.router.navigate(['payment']);
      }
      else{
        M.toast({html:'Registered successfuly.', classes:'rounded'});
      }
     
    });
  }

}
