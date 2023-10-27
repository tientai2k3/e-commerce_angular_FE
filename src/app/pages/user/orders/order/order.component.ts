import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/service/Storage.service';
import { CartService } from 'src/app/service/user/cart.service';
import { OrderService } from 'src/app/service/user/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  listCart: any;
  totalAmount: number = 0;
  formOrder = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    note: new FormControl(''),
  });
  constructor(
    private orderService: OrderService,
    private cartService: CartService,
    private router: Router,
    private storageService: StorageService
  ) {}

  ngOnInit() {
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

  save() {
    const extraData = {
      total: this.totalAmount,
      idUser: this.storageService.getUser().id,
    };
    const dataToSave = {
      ...this.formOrder.value,
      ...extraData,
    };
    console.log(dataToSave);
    this.orderService.add(dataToSave).subscribe({
      next: () => {
        alert('Đặt hàng thành công');
        this.router.navigate(['/home']);
      },
      error(err) {
        console.log(err);
        alert('Lỗi ' + err.message);
      },
    });
  }
}
