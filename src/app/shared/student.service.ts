import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
    selectedStudent:Student;
    students:Student[];
    readonly baseURL ='http://127.0.0.1:3000/student/';
    readonly registerURL='http://127.0.0.1:3000/register/student';

  constructor(private http : HttpClient) 
  { }
  getMaterials(){
    return this.http.get('http://127.0.0.1:3000/files/studymaterials/' + JSON.parse(localStorage.getItem('student_level')));
  }
  postStudent(std : Student){
    return this.http.post(this.registerURL,std);
  }
  getStudentList(){
    return this.http.get(this.baseURL);
  }
  getStudent(){
    console.log(this.baseURL+"profile/" + JSON.parse(localStorage.getItem("student")));
    return this.http.get(this.baseURL+"profile/" + JSON.parse(localStorage.getItem("student")));
  }
  assignStudent(stdId:String,section:String){
    return this.http.patch(this.baseURL,{student_id:stdId,student_section:section});
  }
  deleteStudent(id:String)
  {
    return this.http.delete(this.baseURL + `/${id}`);
  }
  storeStudent(currentStudent:String)
  {
    localStorage.setItem("student",JSON.stringify(currentStudent));
    
  }
}
