import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/service/admin/products.service';

@Component({
  selector: 'app-listProducts',
  templateUrl: './listProducts.component.html',
  styleUrls: ['./listProducts.component.css'],
})
export class ListProductsComponent implements OnInit {
  listProduct: any;
  selectedSortField!: string;
  constructor(private productService: ProductsService, private router: Router) {
    this.productService.getAll().subscribe((data) => {
      console.log(data);

      this.listProduct = data;
    });
  }

  onSortChange(event: any) {
    this.selectedSortField = event.field;
  }
  ngOnInit() {}

  remove(id: any) {
    const a = window.confirm('Are you sure you want to remove?');
    if (!a) {
      return;
    }
    this.productService.delete(id).subscribe({
      next: () => {
        window.location.reload();
        this.router.navigate(['/admin/products']);
      },
      error(err) {
        console.log(err);
        alert('Xóa thất bại');
      },
    });
  }

  export() {
    this.productService.export().subscribe((data) => {
      const blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'users.xlsx';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
}
