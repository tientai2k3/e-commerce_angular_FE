import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/service/user/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  listProduct: any;
  constructor(private productService: HomeService, private router: Router) {
    this.productService.getAll().subscribe((data) => {
      console.log(data);

      this.listProduct = data;
    });
  }

  ngOnInit() {}
}
