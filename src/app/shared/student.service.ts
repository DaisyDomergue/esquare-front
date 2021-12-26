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
    readonly baseURL ='http://192.168.202.55:3000/student/';
    readonly registerURL='http://192.168.202.55:3000/register/student';

  constructor(private http : HttpClient) 
  { }

  postStudent(std : Student){
    return this.http.post(this.registerURL,std);
  }
  getStudentList(){
    return this.http.get(this.baseURL);
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
