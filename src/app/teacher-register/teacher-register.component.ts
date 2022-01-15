import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { TeacherService } from '../shared/teacher.service';

declare var M:any;

@Component({
  selector: 'app-teacher-register',
  templateUrl: './teacher-register.component.html',
  styleUrls: ['./teacher-register.component.css']
})
export class TeacherRegisterComponent implements OnInit {

  constructor(public teacherService:TeacherService,
          private router:Router) { 
            this.teacherService.selectedTeacher={
              _id:"",
              first_name:"",
              last_name: "",
              national_id_no:"",
              level: "",
              email: "",
              phone_no:"",
              user_name:"",
              user_password:"",
              section:""
            }
          }

          levels = [{key:"pre_1",value:"Preschool - I"},{key:"pre_2",value:"Preschool - II"},{key:"pre_3",value:"Preschool - III"},{key:"spe_1",value:"Special Education Level - I"},{key:"spe_2",value:"Special Education Level - II"},{key:"accelerated",value:"Accelerated Program"},{key:"care_basic",value:"Caregivers Training Basic"},{key:"care_adv",value:"Caregivers Training Advanced"}];

  

  ngOnInit(): void {
  }
  

  onSubmit(form:NgForm){
    this.teacherService.postTeacher(form.value).subscribe((res)=>
    {
      console.log(res);
      M.toast({html:'Registered successfuly.', classes:'rounded'});
      this.router.navigate(['sign-in']);
    })
  }

}
