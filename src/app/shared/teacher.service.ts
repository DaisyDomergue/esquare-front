import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Teacher} from './teacher.model';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  selectedTeacher: Teacher;
  teachers:Teacher[];

  readonly baseURL='http://192.168.202.55:3000/teacher/';
  readonly registerURL='http://192.168.202.55:3000/register/teacher';

  constructor(private http:HttpClient) { }

  postTeacher(std : Teacher){
    return this.http.post(this.registerURL,std);
  }
  getTeacherList(){
    return this.http.get(this.baseURL);
  }
  getTeacher(){
    //console.log(this.baseURL+"profile/" + JSON.parse(localStorage.getItem("student")));
    return this.http.get(this.baseURL+"profile/" + JSON.parse(localStorage.getItem("teacher")));
  }
  assignTeacher(stdId:String,section:String){
    return this.http.patch(this.baseURL,{teacher_id:stdId,teacher_section:section});
  }
  deleteTeacher(id:String)
  {
    return this.http.delete(this.baseURL + `/${id}`);
  }
  storeTeacher(currentStudent:String)
  {
    localStorage.setItem("teacher",JSON.stringify(currentStudent));
  }

}
