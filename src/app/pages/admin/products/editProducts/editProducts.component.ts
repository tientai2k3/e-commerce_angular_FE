import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/interface/ICategory';
import { IColor } from 'src/app/interface/IColor';
import { CategoryService } from 'src/app/service/admin/category.service';
import { ColorService } from 'src/app/service/admin/color.service';
import { ProductsService } from 'src/app/service/admin/products.service';

@Component({
  selector: 'app-editProducts',
  templateUrl: './editProducts.component.html',
  styleUrls: ['./editProducts.component.css'],
})
export class EditProductsComponent implements OnInit {
  listColor!: IColor[];
  listCategory!: ICategory[];

  formProducts = new FormGroup({
    product_Code: new FormControl('', [Validators.required]),
    product_Name: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    price: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    colorId: new FormControl(''),
    categoryId: new FormControl(''),
    image: new FormControl(''),
  });
  constructor(
    private service: ProductsService,
    private router: Router,
    private colorService: ColorService,
    private categoryService: CategoryService,
    private activatedRouter: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.colorService.getAllColor().subscribe((data) => {
      this.listColor = data;
    });
    this.categoryService.getAll().subscribe((res) => {
      this.listCategory = res;
    });
  }

  ngOnInit() {
    const a = window.confirm('Are you sure you want to update?');
    if (!a) {
      return;
    }
    const id = this.activatedRouter.snapshot.paramMap.get('id');
    this.service.getOne(id).subscribe((res) => {
      this.formProducts.patchValue({
        product_Code: res.product_Code,
        product_Name: res.product_Name,
        description: res.description,
        price: res.price,
        quantity: res.quantity,
        colorId: res.color.id,
        categoryId: res.category.id,
      });
    });
  }
  update() {
    const a = window.confirm('Are you sure you want to edit?');
    if (!a) {
      return;
    }
    const id = this.activatedRouter.snapshot.paramMap.get('id');
    const data = this.formProducts.value;
    this.service.update(id, data).subscribe({
      next: () => {
        this.router.navigate(['/admin/products']);
        alert('Sửa thành công');
      },
      error(err) {
        console.log(err);
        alert('Lỗi ' + err.message);
      },
    });
  }
}
