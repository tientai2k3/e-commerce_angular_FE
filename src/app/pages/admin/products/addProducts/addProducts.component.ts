import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../../service/admin/products.service';
import { Router } from '@angular/router';
import { ColorService } from 'src/app/service/admin/color.service';
import { CategoryService } from 'src/app/service/admin/category.service';
import { IColor } from 'src/app/interface/IColor';
import { ICategory } from 'src/app/interface/ICategory';
import * as e from 'cors';

@Component({
  selector: 'app-addProducts',
  templateUrl: './addProducts.component.html',
  styleUrls: ['./addProducts.component.css'],
})
export class AddProductsComponent implements OnInit {
  image: any | null = null;

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
    private categoryService: CategoryService
  ) {
    this.colorService.getAllColor().subscribe((data) => {
      this.listColor = data;
    });
    this.categoryService.getAll().subscribe((res) => {
      this.listCategory = res;
    });
  }

  onFileChange(event: any) {
    this.image = event.target.files[0];
    const fr = new FileReader();
    fr.onload = (evento: any) => {};
    if (this.image) {
      fr.readAsDataURL(this.image);
    }
  }

  // onImageChange(event: Event) {
  //   const a = window.confirm('Are you sure you want to create?');
  //   if (!a) {
  //     return;
  //   }
  //   const inputElement = event.target as HTMLInputElement;
  //   if (inputElement.files && inputElement.files.length > 0) {
  //     const file = inputElement.files[0];
  //     const reader = new FileReader();

  //     reader.onload = (e) => {
  //       if (e.target) {
  //         const base64Image = e.target.result as string;
  //         const imageControl = this.formProducts.get('image');
  //         if (imageControl) {
  //           imageControl.setValue(base64Image);
  //         }
  //       }
  //     };

  //     reader.readAsDataURL(file);
  //   }
  // }

  ngOnInit() {}

  save() {
    if (this.image) {
      const productData = this.formProducts.value;

      this.service.add(productData).subscribe({
        next: (data) => {
          console.log(data.id);
          this.service.addImage(data.id, this.image).subscribe((res) => {
            console.log(res);
          });
          console.log(productData);

          alert('Thêm thành công');
          this.router.navigate(['/admin/products']);
        },
        error(err) {
          console.log(err);
          alert('Lỗi ' + err.message);
        },
      });
    } else {
      alert('Vui lòng chọn một hình ảnh trước khi thêm.');
    }
  }
}
