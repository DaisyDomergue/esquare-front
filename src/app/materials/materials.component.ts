import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';
@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  constructor(public studentService: StudentService) { }
 
  ngOnInit(): void {
    this.studentService.getMaterials().subscribe((res)=>{
      console.log(res);
      this.folders=res['data'];
      this.parentfolder=res['folder'];
      
    });
  }
  async Files(parent:string,folder:string){
    window.fetch('http://127.0.0.1:3000/files/listfiles/'+parent+'&' +folder, {
   
      method: 'GET',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    }).then(res => res.json()).then( res => {
      this.file_list=res.data;
    });

  }
  folders=[];
  parentfolder="";
  file_list=[];

}
