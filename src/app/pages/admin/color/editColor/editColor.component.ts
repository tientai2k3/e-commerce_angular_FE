import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ColorService } from 'src/app/service/admin/color.service';

@Component({
  selector: 'app-editColor',
  templateUrl: './editColor.component.html',
  styleUrls: ['./editColor.component.css'],
})
export class EditColorComponent implements OnInit {
  formColor = new FormGroup({
    color_name: new FormControl(''),
  });
  constructor(
    private router: Router,
    private colorService: ColorService,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    const colorId = this.activeRoute.snapshot.paramMap.get('id');
    this.colorService.getOne(colorId).subscribe((color) => {
      this.formColor.patchValue({
        color_name: color.color_name,
      });
    });
  }
  update() {
    const a = window.confirm('Are you sure you want to edit?');
    if (!a) {
      return;
    }
    const id = this.activeRoute.snapshot.paramMap.get('id');
    const data = this.formColor.value;
    this.colorService.updateColor(id, data).subscribe({
      next: () => {
        this.router.navigate(['admin/color']);
        alert('Sửa thành công');
      },
      error(err) {
        console.log(err);
        alert('Sửa thất bại ' + err.message);
      },
    });
  }
}
