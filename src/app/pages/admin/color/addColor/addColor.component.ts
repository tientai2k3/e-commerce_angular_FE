import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ColorService } from '../../../../service/admin/color.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addColor',
  templateUrl: './addColor.component.html',
  styleUrls: ['./addColor.component.css'],
})
export class AddColorComponent implements OnInit {
  formColor = new FormGroup({
    color_name: new FormControl('', [Validators.required]),
  });
  constructor(private service: ColorService, private router: Router) {}

  ngOnInit() {}
  save() {
    const a = window.confirm('Are you sure you want to create?');
    if (!a) {
      return;
    }
    const data = this.formColor.value;
    console.log(data);

    this.service.addColor(data).subscribe({
      next: () => {
        alert('Thêm thành công');
        this.router.navigate(['/admin/color']);
      },
      error(err) {
        console.log(err);
        alert('Thêm thất bại ' + err.message);
      },
    });
  }
}
