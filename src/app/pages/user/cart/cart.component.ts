import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/user/cart.service';
import { StorageService } from '../../../service/Storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  listCart: any;
  nguoiDung!: string;
  totalAmount: number = 0;
  quantityToUpdate!: number;
  // cartForm = new FormGroup({
  //   count: new FormControl('1'),
  //   idCart: new FormControl(''),
  //   idProduct: new FormControl(''),
  // });
  constructor(
    private cartService: CartService,
    private router: Router,
    private storageService: StorageService
  ) {
    this.loadData();
  }
  loadData() {
    const id = this.storageService.getUser().id;
    this.cartService.getAllByUser(id).subscribe((data) => {
      console.log(data);

      this.listCart = data;
      this.calculateTotal();
    });
  }
  calculateTotal() {
    this.totalAmount = 0;
    for (const item of this.listCart) {
      item.total = item.count * item.product.price;
      this.totalAmount += item.total;
    }
  }
  updateTotal(item: any) {
    item.total = item.count * item.product.price;
    this.calculateTotal();
    this.quantityToUpdate = item.count;
  }
  ngOnInit() {
    this.nguoiDung = this.storageService.getUser().username;
  }

  delete(id: any) {
    const a = window.confirm('Are you sure you want to remove?');
    if (!a) {
      return;
    }
    this.cartService.delete(id).subscribe({
      next: (data) => {
        alert('Xóa thành công');
        this.loadData();
      },
      error(err) {
        alert('Lỗi ' + err.message);
      },
    });
  }

  update(id: any) {
    const data = this.quantityToUpdate;
    console.log(data);

    this.cartService.update(id, this.quantityToUpdate).subscribe({
      next: () => {
        alert('Sửa Thành công');
        this.loadData();
      },
      error(err) {
        alert('Lỗi ' + err.message);
        console.log(err);
      },
    });
  }
}
