import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/admin/users.service';

@Component({
  selector: 'app-listUser',
  templateUrl: './listUser.component.html',
  styleUrls: ['./listUser.component.css'],
})
export class ListUserComponent implements OnInit {
  listUser: any;
  selectedSortField!: string;
  constructor(private service: UsersService, private router: Router) {
    this.service.getAll().subscribe((data) => {
      console.log(data);

      this.listUser = data;
    });
  }
  onSortChange(event: any) {
    this.selectedSortField = event.field;
  }
  remove(id: any) {
    const a = window.confirm('Are you sure you want to remove?');
    if (!a) {
      return;
    }
    this.service.delete(id).subscribe({
      next: (data) => {
        alert('Xóa thành công');
        this.router.navigate(['/admin/users']);
      },
      error(err) {
        alert('Lỗi ' + err.message);
      },
    });
  }

  export() {
    this.service.export().subscribe((data) => {
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
  ngOnInit() {}
}
