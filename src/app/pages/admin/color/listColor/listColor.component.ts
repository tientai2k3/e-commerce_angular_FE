import { Component, OnInit } from '@angular/core';
import { IColor } from 'src/app/interface/IColor';
import { ColorService } from '../../../../service/admin/color.service';
import { Router } from '@angular/router';
import * as e from 'cors';

@Component({
  selector: 'app-listColor',
  templateUrl: './listColor.component.html',
  styleUrls: ['./listColor.component.css'],
})
export class ListColorComponent implements OnInit {
  colorList!: IColor[];
  constructor(private colorService: ColorService, private router: Router) {
    this.colorService.getAllColor().subscribe((data) => {
      this.colorList = data;
    });
  }

  ngOnInit() {}

  removeColor(id: any) {
    const a = window.confirm('Are you sure you want to remove?');
    if (!a) {
      return;
    }
    window.confirm('Bạn có muốn xóa màu không');

    this.colorService.deleteColor(id).subscribe({
      next: () => {
        this.router.navigate(['/admin/color']);
        alert('Xóa thành công');
      },
      error(err) {
        console.log(e);
        alert('Xóa thất bại');
      },
    });
  }
}
