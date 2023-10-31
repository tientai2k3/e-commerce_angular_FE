import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/service/Storage.service';
import { OrderService } from 'src/app/service/admin/order.service';

@Component({
  selector: 'app-orderDetail',
  templateUrl: './orderDetail.component.html',
  styleUrls: ['./orderDetail.component.css'],
})
export class OrderDetailComponent implements OnInit {
  order: any;
  order_item: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
    private storageService: StorageService
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.orderService.getOne(id).subscribe((data) => {
      this.order = data;
      console.log(data);
    });
    this.orderService.getListOrderItem(id).subscribe((data) => {
      this.order_item = data;
      console.log(data);
    });
  }
  calculateTotal(): number {
    let total = 0;
    for (let x of this.order_item) {
      total += x.product.price * x.product.quantity;
    }
    return total;
  }
  ngOnInit() {}
}
