import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/service/admin/products.service';
import { CartService } from 'src/app/service/user/cart.service';
import { HomeService } from 'src/app/service/user/home.service';
import { StorageService } from '../../../service/Storage.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: any;
  formCart = new FormGroup({
    idUser: new FormControl(this.storageService.getUser().id),
    count: new FormControl(''),
  });
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: HomeService,
    private router: Router,
    private cartService: CartService,
    private storageService: StorageService
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.getOne(id).subscribe((data) => {
      this.product = data;
      console.log(data);
    });
  }
  save() {
    const data = this.formCart.value;
    console.log(data);
    this.cartService.add(this.product.id, data).subscribe({
      next: () => {
        console.log(this.storageService.getUser().id);

        alert('Thêm vòa giỏ hàng thành công');
        this.router.navigate(['/shop/' + this.product.id]);
      },
      error(err) {
        console.log(err);
        alert('Lỗi ' + err.message);
      },
    });
  }
  ngOnInit() {}
}
