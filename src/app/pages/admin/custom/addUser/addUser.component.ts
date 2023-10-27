import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/admin/users.service';

@Component({
  selector: 'app-addUser',
  templateUrl: './addUser.component.html',
  styleUrls: ['./addUser.component.css'],
})
export class AddUserComponent implements OnInit {
  formUser = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
    fullName: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    phone_Number: new FormControl(''),
  });
  constructor(private service: UsersService, private router: Router) {}

  ngOnInit() {}

  save() {
    const a = window.confirm('Are you sure you want to create?');
    if (!a) {
      return;
    }
    const data = this.formUser.value;
    console.log(data);
    this.service.add(data).subscribe({
      next: () => {
        alert('Thêm thành công');
        this.router.navigate(['/admin/users']);
      },
      error(err) {
        console.log(err);
        alert('Lỗi ' + err.message);
      },
    });
  }
}
