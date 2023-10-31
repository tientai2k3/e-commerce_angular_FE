import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/service/Storage.service';
import { OrderService } from 'src/app/service/user/order.service';

@Component({
  selector: 'app-myhistory',
  templateUrl: './myhistory.component.html',
  styleUrls: ['./myhistory.component.css'],
})
export class MyhistoryComponent implements OnInit {
  orderList: any;
  constructor(
    private orderService: OrderService,
    private router: Router,
    private storageService: StorageService
  ) {
    this.loadData();
  }
  loadData() {
    const id = this.storageService.getUser().id;
    this.orderService.getAll(id).subscribe((data) => {
      this.orderList = data;
    });
  }

  ngOnInit() {}
}
