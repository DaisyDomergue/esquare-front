import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../shared/admin.service.service';
declare var M: any;
@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css'],
})
export class RegisterAdminComponent implements OnInit {
  constructor(public adminService: AdminService, private router: Router) {
    this.adminService.selectedAdmin = {
      _id: '',
      first_name: '',
      last_name: '',

      email: '',
      phone_no: '',
      user_name: '',
      user_password: '',
    };
  }

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.adminService.postAdmin(form.value).subscribe((res) => {
      console.log(res);
      M.toast({html:'Registered successfuly.', classes:'rounded'});
      this.router.navigate(['sign-in']);
    });
  }
}
