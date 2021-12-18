import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }
 currentUsername:String;
 type:String;

  ngOnInit(): void {
    this.currentUsername=localStorage.getItem('student') || null;
    this.type=localStorage.getItem('type') || null;
  }
  logout(){
    this.currentUsername=null;
    this.type=null;
    localStorage.setItem("type","");
    this.router.navigate(['sign-in']);
    
  }

}
