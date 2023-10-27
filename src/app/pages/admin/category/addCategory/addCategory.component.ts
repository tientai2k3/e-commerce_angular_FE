import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/admin/category.service';

@Component({
  selector: 'app-addCategory',
  templateUrl: './addCategory.component.html',
  styleUrls: ['./addCategory.component.css'],
})
export class AddCategoryComponent implements OnInit {
  formCategory = new FormGroup({
    category_Name: new FormControl('', [Validators.required]),
  });
  constructor(private service: CategoryService, private router: Router) {}

  ngOnInit() {}
  save() {
    const a = window.confirm('Are you sure you want to create?');
    if (!a) {
      return;
    }
    const data = this.formCategory.value;
    console.log(data);

    this.service.add(data).subscribe({
      next: () => {
        alert('Thêm thành công');
        this.router.navigate(['/admin/category']);
      },
      error(err) {
        console.log(err);
        alert('Thêm thất bại ' + err.message);
      },
    });
  }
}
