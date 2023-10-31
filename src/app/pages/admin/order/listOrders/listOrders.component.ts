import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/service/admin/order.service';

@Component({
  selector: 'app-listOrders',
  templateUrl: './listOrders.component.html',
  styleUrls: ['./listOrders.component.css'],
})
export class ListOrdersComponent implements OnInit {
  orderList: any;
  getNumber!: number;
  getTotalPages!: number;
  order_item: any;
  constructor(private orderService: OrderService, private router: Router) {
    this.loadData(1);
  }
  loadData(page: any) {
    this.orderService.getAll(page).subscribe((data) => {
      this.orderList = data.content; // Ở đây giả sử items chứa danh sách đơn hàng
      this.getNumber = data.number + 1; // Lấy số trang hiện tại
      this.getTotalPages = data.totalPages; // Lấy tổng số trang
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
