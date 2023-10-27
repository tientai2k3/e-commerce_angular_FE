import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/interface/ICategory';
import { CategoryService } from 'src/app/service/admin/category.service';

@Component({
  selector: 'app-listCategory',
  templateUrl: './listCategory.component.html',
  styleUrls: ['./listCategory.component.css'],
})
export class ListCategoryComponent implements OnInit {
  categoryList!: ICategory[];
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.categoryService.getAll().subscribe((data) => {
      this.categoryList = data;
    });
  }

  ngOnInit() {}

  remove(id: any) {
    const a = window.confirm('Are you sure you want to remove?');
    if (!a) {
      return;
    }

    this.categoryService.delete(id).subscribe({
      next: () => {
        this.router.navigate(['/admin/category']);
        alert('Xóa thành công');
      },
      error(err) {
        console.log(err);
        alert('Xóa thất bại');
      },
    });
  }
}
