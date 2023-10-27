import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/admin/category.service';

@Component({
  selector: 'app-editCategory',
  templateUrl: './editCategory.component.html',
  styleUrls: ['./editCategory.component.css'],
})
export class EditCategoryComponent implements OnInit {
  formCategory = new FormGroup({
    category_Name: new FormControl(''),
  });
  constructor(
    private router: Router,
    private servie: CategoryService,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.servie.getOne(id).subscribe((category) => {
      this.formCategory.patchValue({
        category_Name: category.category_Name,
      });
    });
  }
  update() {
    const a = window.confirm('Are you sure you want to update?');
    if (!a) {
      return;
    }
    const id = this.activeRoute.snapshot.paramMap.get('id');
    const data = this.formCategory.value;
    this.servie.update(id, data).subscribe({
      next: () => {
        this.router.navigate(['admin/category']);
        alert('Sửa thành công');
      },
      error(err) {
        console.log(err);
        alert('Sửa thất bại ' + err.message);
      },
    });
  }
}
