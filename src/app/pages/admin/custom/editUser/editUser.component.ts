import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/service/admin/users.service';

@Component({
  selector: 'app-editUser',
  templateUrl: './editUser.component.html',
  styleUrls: ['./editUser.component.css'],
})
export class EditUserComponent implements OnInit {
  formUser = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl(''),
    fullName: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    phone_Number: new FormControl('', [Validators.required]),
  });
  constructor(
    private service: UsersService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    this.service.getOne(id).subscribe((res) => {
      this.formUser.patchValue({
        userName: res.userName,
        password: '',
        fullName: res.fullName,
        address: res.address,
        email: res.email,
        phone_Number: res.phone_Number,
      });
    });
  }
  update() {
    const a = window.confirm('Are you sure you want to edit?');
    if (!a) {
      return;
    }
    const id = this.activateRoute.snapshot.paramMap.get('id');
    const data = this.formUser.value;
    console.log(id);
    console.log(data);

    this.service.update(id, data).subscribe({
      next: () => {
        this.router.navigate(['/admin/users']);
        alert('Sửa thành công');
      },
      error(err) {
        console.log(err);
        alert('Lỗi ' + err.message);
      },
    });
  }
}
