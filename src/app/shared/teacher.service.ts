import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Teacher} from './teacher.model';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  selectedTeacher: Teacher;
  teachers:Teacher[];

  readonly baseURL='http://127.0.0.1:3000/teacher/';
  readonly registerURL='http://127.0.0.1:3000/register/teacher';

  constructor(private http:HttpClient) { }

  postTeacher(std : Teacher){
    return this.http.post(this.registerURL,std);
  }
  getTeacherList(){
    return this.http.get(this.baseURL);
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
