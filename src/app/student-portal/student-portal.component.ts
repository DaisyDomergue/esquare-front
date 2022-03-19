import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';

@Component({
  selector: 'app-student-portal',
  templateUrl: './student-portal.component.html',
  styleUrls: ['./student-portal.component.css'],
})
export class StudentPortalComponent implements OnInit {
  constructor(public studentService: StudentService) { }
  first_name = '';
  last_name = '';
  level = '';
  section = '';
  classLink = '';

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent() {
    this.studentService
      .getStudent()
      .pipe(
        (res) => res,
        (err) => {
          console.log("eerr", err);
          // alert('You are not authorized');
          return err;
        }
      )
      .subscribe((res) => {
        console.log("Student",res);
        this.first_name = res['first_name'];
        this.last_name = res['last_name'];
        this.level = res['level'];
        this.section = res['section'];
        this.classLink = res['clasLink']
        localStorage.setItem("classLink", JSON.stringify(this.classLink));

        localStorage.setItem("student_level", JSON.stringify(this.level));


        // console.log(this.level, this.section);

        //this.studentService.students = res as Student[];
      });
  }
  // getClassLink(fname , lname, level, section){
  //   const secret = "NkoyvRdIJ6U5csQB09fqS5jbQMD7qjTkIA7eeN1BGo4";
  //   const apiCmd = 'join';
  //   const userUname = fname+"-"+lname+"-"+randomInt(5);
  //   const url = "https://bbbdev.esquare-homeschooling.com/bigbluebutton/api/"
  //   var addr = `fullName=${userUname}ID=random-7321740&password=ap&redirect=true`;
  //   var checksum = createHmac('sha1',secret).update(apiCmd+addr).digest()
  //   var meetingLink = url+apiCmd+"?"+addr+"&checksum="+checksum;
  //   return meetingLink;
  // }
}
